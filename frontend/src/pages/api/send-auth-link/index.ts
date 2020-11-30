import { createHash, randomBytes } from "crypto";
import { createTransport } from "nodemailer";
import {
  UpsertHostDocument,
  UpsertHostMutation,
  UpsertHostMutationVariables,
} from "generated/graphql";
import { createClient } from "urql";
import { NextApiRequest, NextApiResponse } from "next";

const transport = createTransport({
  service: "gmail",
  auth: {
    user: process.env.API_EMAIL_USER,
    pass: process.env.API_EMAIL_PASSWORD,
  },
});

export default async function StartGame(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createClient({
    url: "http://trivia-night-hasura:8080/v1/graphql",
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${req.body?.session_variables["x-hasura-backend-token"]}`,
      },
    },
  });

  if (req.body?.input?.email === undefined) {
    return res
      .status(400)
      .json({ message: "must provide email to use to login" });
  }
  const email = req.body?.input?.email;

  const emailHash = createHash("sha256").update(email).digest("hex");
  const oneTimePassword = randomBytes(32).toString("hex");
  const oneTimePasswordHash = createHash("sha256")
    .update(oneTimePassword)
    .digest("hex");

  const result = await client
    .mutation<UpsertHostMutation, UpsertHostMutationVariables>(
      UpsertHostDocument,
      { emailHash, oneTimePasswordHash }
    )
    .toPromise();

  if (result.error) {
    res.status(400).send({ status: result.error.message });
    return;
  }

  const loginLink = `http://${process.env.API_APP_BASE_HOST}/login/${emailHash}/${oneTimePassword}`;

  await transport
    .sendMail({
      from: process.env.API_EMAIL_USER,
      to: "mostlind@gmail.com",
      subject: "Trivia Night App",
      html: `
      <h1>Please use the below link to sign into Trivia Night as a host</h1>
      <br />
      <a href="${loginLink}">Login to Trivia Night</a>`,
    })
    .then((result) => {
      console.log("successfully sent mail");
      res.status(200).json({ status: "sent email" });
    })
    .catch((err) => {
      console.log("failed at sending mail");
      res.status(400).json({ status: "error" });
    });
}

import { createHash, randomBytes } from "crypto";
import { createTransport } from "nodemailer";
import {} from "generated/graphql";
import { createClient } from "urql";
import { NextApiRequest, NextApiResponse } from "next";

const client = createClient({
  url: "http://trivia-night-hasura:8080/v1/graphql",
  fetchOptions() {
    return {
      headers: {
        Authorization: "Bearer host 324b7800-12f5-483c-a76e-8346ce107fb1",
      },
    };
  },
});

export default async function StartGame(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transport = createTransport({
    service: "gmail",
    auth: {
      user: process.env.API_EMAIL_USER,
      pass: process.env.API_EMAIL_PASSWORD,
    },
  });

  await transport
    .sendMail({
      from: process.env.API_EMAIL_USER,
      to: "mostlind@gmail.com",
      subject: "Trivia Night App",
      text: "hello",
    })
    .then((result) => {
      console.log("successfully sent mail");
      res.status(200).json({ yes: "wooo" });
    })
    .catch((err) => {
      console.log("failed at sending mail");
      res.status(400).json({ no: "booo" });
    });

  createHash("sha256").update("mostlind@gmail.com").digest("hex");
  randomBytes(32).toString("hex");
}

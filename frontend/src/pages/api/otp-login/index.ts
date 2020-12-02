import { createHash } from "crypto";
import {
  DeleteOneTimePasswordDocument,
  DeleteOneTimePasswordMutation,
  DeleteOneTimePasswordMutationVariables,
} from "generated/graphql";
import { createClient } from "urql";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function TokenFromOneTimePassword(
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

  if (
    req.body?.input?.credentials?.emailHash === undefined ||
    req.body?.input?.credentials?.oneTimePassword === undefined
  ) {
    return res.status(400).json({
      message: "must provide email hash and one time password to log in",
    });
  }

  const emailHash = req.body?.input?.credentials?.emailHash;
  const oneTimePasswordHash = createHash("sha256")
    .update(req.body?.input?.credentials?.oneTimePassword)
    .digest("hex");

  const result = await client
    .mutation<
      DeleteOneTimePasswordMutation,
      DeleteOneTimePasswordMutationVariables
    >(DeleteOneTimePasswordDocument, {
      emailHash,
      otpHash: oneTimePasswordHash,
    })
    .toPromise();

  if (result.error) {
    res.status(400).send({ status: result.error.message });
    return;
  }

  if (result.data?.delete_one_time_password_by_pk?.host === undefined) {
    res.status(400).send({ status: "login credentials didn't exist" });
    return;
  }

  const hostId = result.data?.delete_one_time_password_by_pk?.host.id;

  const secret = "1234";

  const token = jwt.sign({ role: "host" }, secret, {
    subject: hostId,
    expiresIn: "7d",
  });

  res.status(200).json({ token });
}

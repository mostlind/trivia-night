import {
  CreateTeamDocument,
  CreateTeamMutation,
  CreateTeamMutationVariables,
} from "generated/graphql";
import { createClient } from "urql";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function TokenFromOneTimePassword(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const client = createClient({
    url: "http://trivia-night-hasura:8080/v1/graphql",
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${req.body?.session_variables["x-hasura-backend-token"]}`,
      },
    },
  });

  if (
    req.body?.input?.teamName === undefined ||
    req.body?.input?.gameStateId === undefined
  ) {
    return res.status(400).json({
      message: "must provide team name",
    });
  }

  const result = await client
    .mutation<CreateTeamMutation, CreateTeamMutationVariables>(
      CreateTeamDocument,
      {
        team: {
          name: req.body?.input?.teamName,
          game_state_id: req.body?.input?.gameStateId,
        },
      }
    )
    .toPromise();

  if (result.error) {
    res.status(400).send({ message: result.error.message });
    return;
  }

  if (result.data?.insert_team_one?.id === undefined) {
    res.status(400).send({ message: "teamId didn't exist" });
    return;
  }

  const teamId = result.data?.insert_team_one?.id;

  const secret = "1234";

  const token = jwt.sign({ role: "participant" }, secret, {
    subject: teamId,
    expiresIn: "7d",
  });

  res.status(200).json({ token });
}

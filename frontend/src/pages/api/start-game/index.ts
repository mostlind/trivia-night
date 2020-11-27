import {
  CreateGameStateDocument,
  CreateGameStateMutation,
  CreateGameStateMutationVariables,
  StartGameApiRouteDocument,
  StartGameApiRouteQuery,
  StartGameApiRouteQueryVariables,
} from "generated/graphql";
import { createClient } from "urql";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

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
  if (req.body?.input?.game_id === undefined) {
    return res
      .status(400)
      .json({ message: "must provide id for game to start" });
  }
  const gameQuery = await client
    .query<StartGameApiRouteQuery, StartGameApiRouteQueryVariables>(
      StartGameApiRouteDocument,
      {
        gameId: req.body?.input?.game_id,
      }
    )
    .toPromise();

  if (gameQuery.error) {
    return res.status(400).json(gameQuery.error);
  }

  const game = gameQuery.data?.game_by_pk;

  if (game === undefined || game === null) {
    return res.status(404).json({ message: "game not found" });
  }

  console.log("found the game", game);

  if (game.questions.length === 0) {
    return res
      .status(400)
      .json({ message: "cannot start a game with no questions" });
  }

  const gameStateId = uuidv4();
  const questionStates = game.questions.map((question) => ({
    id: uuidv4(),
    question_id: question.id,
  }));

  const gameState = await client
    .mutation<CreateGameStateMutation, CreateGameStateMutationVariables>(
      CreateGameStateDocument,
      {
        gameStateId,
        gameId: game.id,
        currentQuestionId: questionStates[0].id,
        questionStates: { data: questionStates },
      }
    )
    .toPromise();

  console.log("wrote game state", gameState);

  if (gameState.error) {
    return res.status(400).json(gameQuery.error);
  }

  res.status(200).json({ id: gameState.data?.insert_game_state_one!.id });
}

import {
  CreateGameStateDocument,
  CreateGameStateMutation,
  CreateGameStateMutationVariables,
  Question_State_Arr_Rel_Insert_Input,
  StartGameApiRouteDocument,
  StartGameApiRouteQuery,
  StartGameApiRouteQueryVariables,
} from "generated/graphql";
import { createClient } from "urql";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

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
    return res.status(400).json({ mesage: gameQuery.error });
  }

  const game = gameQuery.data?.game_by_pk;

  if (game === undefined || game === null) {
    return res.status(404).json({ message: "game not found" });
  }

  if (game.questions.length === 0) {
    return res
      .status(400)
      .json({ message: "cannot start a game with no questions" });
  }

  const gameStateId = uuidv4();
  const qustionStateIds = game.questions.map(() => uuidv4());
  const questionStates: Question_State_Arr_Rel_Insert_Input = {
    data: game.questions.map((question, index) => ({
      id: qustionStateIds[index],
      question_id: question.id,
      next_question_state_id: qustionStateIds[index + 1] ?? null,
    })),
  };

  const gameState = await client
    .mutation<CreateGameStateMutation, CreateGameStateMutationVariables>(
      CreateGameStateDocument,
      {
        gameStateId,
        gameId: game.id,
        currentQuestionId: questionStates.data[0].id,
        questionStates,
      }
    )
    .toPromise();

  console.log("wrote game state", gameState);

  if (gameState.error) {
    return res.status(400).json({ mesage: gameState.error });
  }

  res
    .status(200)
    .json({ game_state_id: gameState.data?.insert_game_state_one!.id });
}

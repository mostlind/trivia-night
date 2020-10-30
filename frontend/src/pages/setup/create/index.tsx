import { Stack } from "components/stack";
import { useRouter } from "next/dist/client/router";
import React, { useCallback } from "react";
import { OperationResult } from "urql";
import {
  useCreateGameMutation,
  CreateGameMutation,
} from "../../../generated/graphql";

export default function AddGame() {
  const router = useRouter();
  const [status, createGame] = useCreateGameMutation();
  const routeToCreatedGame = useCallback(
    (result: OperationResult<CreateGameMutation>) => {
      const gameId = result.data?.insert_game_one?.id;
      if (typeof gameId !== "string") {
        throw new Error("huh?");
      }

      router.push("/setup/" + gameId);
    },
    [router]
  );
  if (status.error) {
    return <h1>Error: {status.error.message}</h1>;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get("game-name");
        if (typeof name !== "string") {
          throw new Error("how did this happen?");
        }
        createGame({ name }).then(routeToCreatedGame);
      }}
    >
      <Stack direction="vertical" space={10}>
        <label htmlFor="game-name">Name</label>
        <input
          id="game-name"
          name="game-name"
          type="text"
          required={true}
          minLength={1}
        ></input>
        <button type="submit">Save</button>
      </Stack>
    </form>
  );
}

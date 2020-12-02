import {
  useJoinGamePageQuery,
  useJoinGameCreateTeamMutation,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function JoinGamePage() {
  const router = useRouter();
  const { gameStateId } = router.query;
  const [gameState, _refetch] = useJoinGamePageQuery({
    variables: {
      gameStateId,
    },
  });

  const [_state, createTeam] = useJoinGameCreateTeamMutation();
  if (gameState.fetching) {
    return <h1>Loading...</h1>;
  }

  if (gameState.error) {
    console.log(gameState.error);
    return <h1>Error... {gameState.error.message}</h1>;
  }
  return (
    <>
      <h1>{gameState.data?.game_state_by_pk?.game.name}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (gameStateId === undefined) {
            return;
          }
          const formData = new FormData(e.currentTarget);
          const teamName = formData.get("team-name");
          if (typeof teamName !== "string") {
            throw new Error("weird");
          }
          createTeam({
            gameStateId,
            teamName,
          }).then((response) => {
            if (response.error) {
              console.error(response.error);
              throw new Error(response.error.message);
            }

            if (response.data?.create_team?.token === undefined) {
              throw new Error("something weird happened");
            }
            localStorage.setItem(
              `team-${gameStateId}-token`,
              response.data?.create_team?.token
            );
            router.push("/game/" + gameStateId);
          });
        }}
      >
        <label htmlFor="team-name">Team Name</label>
        <input type="text" name="team-name" id="team-name" />
        <button type="submit">Join</button>
      </form>
    </>
  );
}

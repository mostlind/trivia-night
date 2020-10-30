import { useParticipantGameSubscription } from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function ParticipantOngoingGame() {
  const router = useRouter();
  const { gameId } = router.query;
  const [result, refetch] = useParticipantGameSubscription({
    variables: {
      gameId,
    },
  });

  if (result.error) {
    return <h1>Error: {result.error.message}</h1>;
  }

  if (result.fetching) {
    return <h1>Loading</h1>;
  }

  return <h1>{result.data?.game_state_by_pk?.game.name}</h1>;
}

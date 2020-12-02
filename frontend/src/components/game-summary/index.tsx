import {
  GameSummaryComponentFragment,
  useGameSummary_StartGameMutation,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

interface GameProps {
  game: GameSummaryComponentFragment;
}

export function GameSummary({ game }: GameProps) {
  const router = useRouter();
  const [_result, startGame] = useGameSummary_StartGameMutation();
  return (
    <h3>
      <Link href={`/host/setup/${game.id}`}>{game.name}</Link>
      <button
        onClick={() => {
          startGame({ gameId: game.id }).then((res) => {
            if (res.error) {
              console.log(res.error);
              throw new Error(res.error.message);
            }

            router.push("/host/game/" + res.data?.start_game?.game_state?.id);
          });
        }}
      >
        Start
      </button>
    </h3>
  );
}

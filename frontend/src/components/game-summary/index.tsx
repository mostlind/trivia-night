import { Card } from "components/card";
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
    <Link href={`/host/setup/${game.id}`}>
      <a>
        <Card
          mainText={game.name}
          backgroundColor={"#759cff"}
          hoverColor="#4b76e0"
          button={
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                startGame({ gameId: game.id }).then((res) => {
                  if (res.error) {
                    console.log(res.error);
                    throw new Error(res.error.message);
                  }

                  router.push(
                    "/host/game/" + res.data?.start_game?.game_state?.id
                  );
                });
              }}
            >
              Start
            </button>
          }
        />
      </a>
    </Link>
  );
}

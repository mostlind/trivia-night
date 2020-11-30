import {
  GameSummaryComponentFragment,
  useGameSummary_StartGameMutation,
} from "generated/graphql";
import Link from "next/link";
import React from "react";

interface GameProps {
  game: GameSummaryComponentFragment;
}

export function GameSummary({ game }: GameProps) {
  const [_result, startGame] = useGameSummary_StartGameMutation();
  return (
    <h3>
      <Link href={`/host/setup/${game.id}`}>{game.name}</Link>
      <button
        onClick={() => {
          startGame({ gameId: game.id });
        }}
      >
        Start
      </button>
    </h3>
  );
}

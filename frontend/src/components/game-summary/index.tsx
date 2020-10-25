import { GameSummaryComponentFragment } from "generated/graphql";
import Link from "next/link";
import React from "react";

interface GameProps {
  game: GameSummaryComponentFragment;
}

export function GameSummary({ game }: GameProps) {
  return (
    <Link href={`/games/${game.id}`}>
      <h3>{game.name}</h3>
    </Link>
  );
}

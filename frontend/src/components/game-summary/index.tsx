import { GameSummaryComponentFragment } from "generated/graphql";
import Link from "next/link";
import React from "react";

interface GameProps {
  game: GameSummaryComponentFragment;
}

export function GameSummary({ game }: GameProps) {
  return (
    <h3>
      <Link href={`/setup/${game.id}`}>{game.name}</Link>
    </h3>
  );
}

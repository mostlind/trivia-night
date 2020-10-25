import { GameSummary } from "components/game-summary";
import { useGamesPageQuery } from "generated/graphql";
import Link from "next/link";
import React from "react";

export default function Games() {
  const [req, _refetch] = useGamesPageQuery();
  if (req.fetching) {
    return <h1>Loading...</h1>;
  }

  if (req.error) {
    return <h1>Error: {req.error.message}</h1>;
  }

  return (
    <>
      <h1>Games</h1>
      {req.data?.game.map((game) => (
        <GameSummary game={game} />
      ))}
      <Link href="/games/create">Add Game</Link>
    </>
  );
}

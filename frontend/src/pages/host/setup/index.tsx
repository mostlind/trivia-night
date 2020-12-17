import { GameSummary } from "components/game-summary";
import { useGamesPageQuery } from "generated/graphql";
import { Layout } from "../../../components/layout";
import Link from "next/link";
import React from "react";
import { Card } from "components/card/card";
import { Stack } from "components/stack";
import { spacing } from "styles/theme";

export default function Setup() {
  const [req, _refetch] = useGamesPageQuery();
  if (req.fetching) {
    return <h1>Loading...</h1>;
  }

  if (req.error) {
    return <h1>Error: {req.error.message}</h1>;
  }

  return (
    <Layout title="Trivia Night">
      <Stack direction="vertical" space={spacing.small}>
        {req.data?.game.map((game) => (
          <GameSummary key={game.id} game={game} />
        ))}
        <Link href="/host/setup/create">
          <a>
            <Card
              mainText="Add Game"
              borderColor="white"
              backgroundColor="transparent"
              hoverColor="rgba(255, 255, 255, 0.05)"
              textColor="white"
            ></Card>
          </a>
        </Link>
      </Stack>
    </Layout>
  );
}

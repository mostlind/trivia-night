import { Question } from "components/question";
import { useGamePageQuery } from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useMemo } from "react";

export default function ProjectPage() {
  const router = useRouter();
  const { gameId } = router.query;
  const context = useMemo(() => ({ additionalTypenames: ["question"] }), []);
  const [result, _refectch] = useGamePageQuery({
    variables: { gameId: gameId },
    context,
  });

  const { data, error, fetching } = result;

  if (error) {
    console.error(error);
    return <div>Error</div>;
  }

  if (fetching) {
    return <div>Loading..</div>;
  }

  const game = data?.game_by_pk;

  console.log(game);

  if (!game) {
    return <div>404</div>;
  }

  return (
    <div>
      <Link href="/games">Back to Games</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          throw new Error("Renaming Game Not Implemented");
        }}
      >
        <input name="game-name" defaultValue={game.name} />
        <button type="submit">Rename (Not Implemented)</button>
      </form>
      <ul>
        {game.questions.map((question) => (
          <li>
            <Question question={question} />
          </li>
        ))}
      </ul>
      <Link href={`/games/${game.id}/questions/create`}>Add Question</Link>
    </div>
  );
}

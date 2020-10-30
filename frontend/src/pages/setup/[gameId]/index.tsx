import { Question } from "components/question";
import { Stack } from "components/stack";
import {
  useGamePageQuery,
  useSwapQuestionOrderMutation,
  useRenameGameMutation,
  useStartGameMutation,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useMemo, useState } from "react";

export default function ProjectPage() {
  const router = useRouter();
  const { gameId } = router.query;
  const context = useMemo(() => ({ additionalTypenames: ["question"] }), []);
  const [_swapStatus, swapQuestionOrder] = useSwapQuestionOrderMutation();
  const [_renameStatus, renameGame] = useRenameGameMutation();
  const [_startGameStatus, startGame] = useStartGameMutation();
  const [result, _refectch] = useGamePageQuery({
    variables: { gameId: gameId },
    context,
  });
  const [nameSaved, setNameSaved] = useState(true);

  const { data, error, fetching } = result;

  if (error) {
    console.error(error);
    return <div>Error</div>;
  }

  if (fetching) {
    return <div>Loading..</div>;
  }

  const game = data?.game_by_pk;

  if (!game) {
    return <div>404</div>;
  }

  return (
    <Stack direction="vertical" space={10}>
      <Link href="/setup">Back to Games</Link>
      {/* TODO: Move form to seperate component */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const name = formData.get("game-name");
          if (typeof name !== "string") {
            throw new Error("how?");
          }
          renameGame({ gameId: game.id, name }).then(() => {
            setNameSaved(true);
          });
        }}
        onChange={(e) => {
          const formData = new FormData(e.currentTarget);
          const name = formData.get("game-name");
          if (name === game.name) {
            setNameSaved(true);
          } else {
            setNameSaved(false);
          }
        }}
      >
        <Stack space={5} direction="horizontal">
          <input name="game-name" defaultValue={game.name} />
          {nameSaved ? null : <button type="submit">Rename</button>}
        </Stack>
      </form>
      <h3>Questions</h3>
      <ul>
        {/* TODO: Move mapper function out of return statement */}
        {game.questions.map((question, index, arr) => {
          const prev = arr[index - 1];
          const next = arr[index + 1];
          return (
            <li key={question.id}>
              <Question
                question={question}
                onReorderUp={
                  prev !== undefined
                    ? () =>
                        swapQuestionOrder({
                          question1Id: question.id,
                          question1Order: question.question_order,
                          question2Id: prev.id,
                          question2Order: prev.question_order,
                        })
                    : undefined
                }
                onReorderDown={
                  next !== undefined
                    ? () =>
                        swapQuestionOrder({
                          question1Id: question.id,
                          question1Order: question.question_order,
                          question2Id: next.id,
                          question2Order: next.question_order,
                        })
                    : undefined
                }
              />
            </li>
          );
        })}
        <li>
          <Link href={`/setup/${game.id}/questions/create`}>Add Question</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          startGame({ gameId: game.id });
        }}
      >
        Start Game
      </button>
    </Stack>
  );
}

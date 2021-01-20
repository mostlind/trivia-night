import { Card } from "components/card";
import Input from "components/input";
import { Layout } from "components/layout";
import { Question } from "components/question";
import { Stack } from "components/stack";
import {
  useGamePageQuery,
  useSwapQuestionOrderMutation,
  useRenameGameMutation,
  useGamePage_StartGameMutation,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { spacing } from "styles/theme";

export default function ProjectPage() {
  const router = useRouter();
  const { gameId } = router.query;
  const context = useMemo(() => ({ additionalTypenames: ["question"] }), []);
  const [_swapStatus, swapQuestionOrder] = useSwapQuestionOrderMutation();
  const [_renameStatus, renameGame] = useRenameGameMutation();
  const [_startGameStatus, startGame] = useGamePage_StartGameMutation();
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
    <Layout title={game.name}>
      <Stack direction="vertical" space={spacing.medium}>
        <Link href="/host/setup">Back to Games</Link>
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
          <Stack space={spacing.small} direction="horizontal">
            <Input
              label="Game Name"
              placeholder="game name"
              name="game-name"
              defaultValue={game.name}
            />
            {nameSaved ? null : <button type="submit">Rename</button>}
          </Stack>
        </form>
        <button
          onClick={() => {
            startGame({ gameId: game.id }).then((res) => {
              if (res.error) {
                console.log(res.error);
                throw new Error(res.error.message);
              }

              router.push("/host/game/" + data?.game_by_pk?.id);
            });
          }}
        >
          Start Game
        </button>
        <h3>Questions</h3>
        <Stack direction="vertical" space={spacing.small}>
          {/* TODO: Move mapper function out of return statement */}
          {game.questions.map((question, index, arr) => {
            const prev = arr[index - 1];
            const next = arr[index + 1];
            return (
              <Question
                key={question.id}
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
            );
          })}

          <Link href={`/host/setup/${game.id}/questions/create`}>
            <a>
              <Card
                mainText="Add Question"
                borderColor="white"
                backgroundColor="transparent"
                hoverColor="rgba(255, 255, 255, 0.05)"
                textColor="white"
              ></Card>
            </a>
          </Link>
        </Stack>
      </Stack>
    </Layout>
  );
}

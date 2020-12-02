import React from "react";
import {
  GameHostPageSubscription,
  useGameHostPageSubscription,
  useScoreQuestionMutation,
  useNextQuestionMutation,
  useCloseQuestionMutation,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";

interface OpenQuestionProps {
  gameState: GameHostPageSubscription;
}

function OpenQuestion({ gameState }: OpenQuestionProps) {
  const [_closeQuestionStatus, closeQuestion] = useCloseQuestionMutation();
  return (
    <>
      <h1>
        {gameState.game_state_by_pk?.current_question?.question.question_text}
      </h1>
      <button
        onClick={() => {
          closeQuestion({
            questionStateId: gameState.game_state_by_pk?.current_question?.id,
          });
        }}
      >
        Close Question
      </button>
      {gameState.game_state_by_pk?.teams.map((team) => {
        const hasAnswered = gameState.game_state_by_pk?.current_question?.answers.find(
          (answer) => answer.team.id === team.id
        );
        return (
          <h2>
            {team.name}:
            {hasAnswered !== undefined ? "answered" : "not answered"}
          </h2>
        );
      })}
    </>
  );
}

interface ClosedQuestionProps {
  gameState: GameHostPageSubscription;
}

function ClosedQuestion({ gameState }: ClosedQuestionProps) {
  const [_scoreQuestionStatus, scoreQuestion] = useScoreQuestionMutation();
  const [_nextQuestionStatus, nextQuestion] = useNextQuestionMutation();
  return (
    <>
      {gameState.game_state_by_pk?.current_question?.answers.map((answer) => {
        return (
          <h3>
            <h3>
              {answer.team.name}: {answer.value}
            </h3>
            <button
              disabled={answer.correct !== null && !answer.correct}
              onClick={() => {
                scoreQuestion({ answerId: answer.id, correct: true });
              }}
            >
              Right
            </button>
            <button
              disabled={answer.correct !== null && answer.correct}
              onClick={() => {
                scoreQuestion({ answerId: answer.id, correct: false });
              }}
            >
              Wrong
            </button>
          </h3>
        );
      })}
      <button
        disabled={
          gameState.game_state_by_pk?.current_question
            ?.next_question_state_id === undefined
        }
        onClick={() => {
          nextQuestion({
            gameStateId: gameState.game_state_by_pk?.id,
            questionStateId:
              gameState.game_state_by_pk?.current_question
                ?.next_question_state_id,
          });
        }}
      >
        Next Question
      </button>
    </>
  );
}

export default function GameHostPage() {
  const router = useRouter();
  const { gameStateId } = router.query;
  const [game] = useGameHostPageSubscription({
    variables: {
      gameStateId,
    },
    pause: gameStateId === undefined,
  });

  if (game.error) {
    console.log(game.error);
    return <h1>Error... {game.error.message}</h1>;
  }

  if (game.data === undefined) {
    return <h1>Loading...</h1>;
  }

  console.log(game);

  return (
    <>
      <pre>{JSON.stringify(game.data, null, 2)}</pre>
      <h1>Open Question</h1>
      <OpenQuestion gameState={game.data!} />
      <h1>Closed Question</h1>
      <ClosedQuestion gameState={game.data!} />
    </>
  );
}

import {
  ParticipantGameSubscription,
  useAnswerQuestionMutation,
  useParticipantGameSubscription,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface ParticipantOpenQuestionProps {
  gameState: ParticipantGameSubscription;
}

function ParticipantOpenQuestion({ gameState }: ParticipantOpenQuestionProps) {
  const [_status, answerQuestion] = useAnswerQuestionMutation();
  return (
    <>
      {gameState.game_state_by_pk?.current_question?.question.question_text}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const currentQuestionId =
            gameState.game_state_by_pk?.current_question?.id;
          const formData = new FormData(e.currentTarget);
          const answer = formData.get("answer");
          if (typeof answer !== "string") {
            throw new Error("whaaa?");
          }
          answerQuestion({
            value: answer,
            question_state_id: currentQuestionId,
          });
        }}
      >
        <label htmlFor="answer">Answer</label>
        <textarea name="answer" id="answer"></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function ParticipantClosedQuestion() {
  return <h2>Waiting for host to open next question</h2>;
}

export default function ParticipantOngoingGame() {
  const router = useRouter();
  const { gameStateId } = router.query;
  const [result, refetch] = useParticipantGameSubscription({
    variables: {
      gameStateId,
    },
    pause: gameStateId === undefined,
  });

  if (result.error) {
    return <h1>Error: {result.error.message}</h1>;
  }

  if (result.data === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <h1>{result.data?.game_state_by_pk?.game.name}</h1>
      <h1>Open Question</h1>
      <ParticipantOpenQuestion gameState={result.data} />
      <h1>Closed Question</h1>
      <ParticipantClosedQuestion />
    </>
  );
}

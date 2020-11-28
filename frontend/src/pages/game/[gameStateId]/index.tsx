import {
  ParticipantGameSubscription,
  useParticipantGameSubscription,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface ParticipantOpenQuestionProps {
  gameState: ParticipantGameSubscription;
}

function ParticipantOpenQuestion({ gameState }: ParticipantOpenQuestionProps) {
  return (
    <>
      {gameState.game_state_by_pk?.current_question?.question.question_text}
      <form>
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

import {
  ParticipantGameSubscription,
  Question_State_Enum_Enum,
  useAnswerQuestionMutation,
  useParticipantGameSubscription,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface ParticipantOpenQuestionProps {
  gameState: ParticipantGameSubscription["game_state_by_pk"];
  onAnswerQuestion: (answer: string) => void;
}

function ParticipantOpenQuestion({
  gameState,
  onAnswerQuestion,
}: ParticipantOpenQuestionProps) {
  return (
    <>
      {gameState?.current_question?.question.question_text}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const currentQuestionId = gameState?.current_question?.id;
          const formData = new FormData(e.currentTarget);
          const answer = formData.get("answer");
          if (typeof answer !== "string") {
            throw new Error("whaaa?");
          }
          onAnswerQuestion(answer);
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
      <States foundGame={result.data.game_state_by_pk} />
    </>
  );
}

function States({
  foundGame,
}: {
  foundGame: ParticipantGameSubscription["game_state_by_pk"];
}) {
  const [_status, answerQuestion] = useAnswerQuestionMutation();

  switch (foundGame?.current_question?.state) {
    case Question_State_Enum_Enum.NotOpened: {
      return (
        <>
          <h1>Waiting on the host to open this question</h1>
        </>
      );
    }

    case Question_State_Enum_Enum.Open: {
      return (
        <ParticipantOpenQuestion
          gameState={foundGame}
          onAnswerQuestion={(answer) => {
            answerQuestion({
              value: answer,
              question_state_id: foundGame.current_question?.id,
            });
          }}
        />
      );
    }

    case Question_State_Enum_Enum.Closed: {
      return <ParticipantClosedQuestion />;
    }

    case Question_State_Enum_Enum.Scored: {
      return <h1>I don't think I'm going to use this one</h1>;
    }

    case undefined:
    case null: {
      return <h1>Hmm</h1>;
    }
  }
}

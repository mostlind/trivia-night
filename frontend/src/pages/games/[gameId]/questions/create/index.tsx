import { QuestionForm } from "components/question-form";
import { useInsertQuestionMutation } from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function ProjectPage() {
  const [_updateStatus, insertQuestion] = useInsertQuestionMutation();
  const router = useRouter();
  const { gameId } = router.query;

  if (typeof gameId !== "string") {
    return <div>404</div>;
  }

  return (
    <QuestionForm
      onSubmit={(question) => {
        insertQuestion({
          game_id: gameId,
          question_text: question.questionText,
          point_value: question.pointValue,
        }).then(() => {
          router.push(`/games/${gameId}`);
        });
      }}
    />
  );
}

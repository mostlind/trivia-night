import { QuestionForm } from "components/question-form";
import {
  useQuestionPageQuery,
  useUpdateQuestionMutation,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function ProjectPage() {
  const [_insertStatus, insertQuestion] = useUpdateQuestionMutation();
  const router = useRouter();
  const { gameId, questionId } = router.query;

  const [result, _refectch] = useQuestionPageQuery({
    variables: { questionId: questionId },
  });

  const { data, error, fetching } = result;

  if (error) {
    console.error(error);
    return <div>Error</div>;
  }

  if (fetching) {
    return <div>Loading..</div>;
  }

  const question = data?.question_by_pk;

  if (typeof gameId !== "string" || !question) {
    return <div>404</div>;
  }

  return (
    <QuestionForm
      question={question}
      onSubmit={(question) => {
        insertQuestion({
          question_id: questionId,
          question_text: question.questionText,
          point_value: question.pointValue,
        }).then(() => {
          router.push(`/host/setup/${gameId}`);
        });
      }}
    />
  );
}

import { QuestionComponentFragment } from "generated/graphql";
import Link from "next/link";
import React from "react";

interface QuestionProps {
  question: QuestionComponentFragment;
}

export function Question({ question }: QuestionProps) {
  return (
    <div>
      <p>{question.question_text}</p>
      <p>Value: {question.point_value}</p>
      <Link href={`/games/${question.game_id}/questions/${question.id}`}>
        Edit
      </Link>
    </div>
  );
}

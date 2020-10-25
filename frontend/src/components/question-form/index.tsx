import { QuestionComponentFragment } from "generated/graphql";
import React from "react";

interface QuestionFormSubmission {
  questionText: string;
  pointValue: number;
}

interface QuestionProps {
  question?: QuestionComponentFragment;
  onSubmit: (updatedQuestion: QuestionFormSubmission) => void;
}

export function QuestionForm({ question, onSubmit }: QuestionProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const questionText = formData.get("question-text");
        const pointValue = formData.get("point-value");

        if (typeof questionText !== "string") {
          throw new Error("plz no");
        }

        if (typeof pointValue === "string") {
          var pointValueParsed = Number(pointValue);
        } else {
          throw new Error("how?");
        }

        onSubmit({
          questionText,
          pointValue: pointValueParsed,
        });
      }}
    >
      <textarea
        name="question-text"
        id="question-text"
        defaultValue={question?.question_text ?? ""}
      ></textarea>
      <label htmlFor="point-value">Point Value</label>
      <input
        type="number"
        name="point-value"
        id="point-value"
        defaultValue={question?.point_value ?? 1}
      />
      <button type="submit">Save</button>
    </form>
  );
}

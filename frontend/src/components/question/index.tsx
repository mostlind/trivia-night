import { QuestionComponentFragment } from "generated/graphql";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface QuestionProps {
  question: QuestionComponentFragment;
  onReorderUp: (() => Promise<any>) | undefined;
  onReorderDown: (() => Promise<any>) | undefined;
}

export function Question({
  question,
  onReorderUp,
  onReorderDown,
}: QuestionProps) {
  const upRef = useRef(null as HTMLButtonElement | null);
  const downRef = useRef(null as HTMLButtonElement | null);
  const [refocous, setRefocus] = useState(null as null | number);

  useEffect(() => {
    if (refocous === null) return;
    const shoudFocusDown = onReorderUp === undefined;
    const shouldFocusUp = onReorderDown === undefined;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (shoudFocusDown) {
          downRef.current?.focus();
        } else if (shouldFocusUp) {
          upRef.current?.focus();
        }
        setRefocus(null);
      });
    });
  }, [onReorderUp === undefined, onReorderDown === undefined, refocous]);

  return (
    <div>
      <p>{question.question_text}</p>
      <p>Value: {question.point_value}</p>
      <Link href={`/host/setup/${question.game_id}/questions/${question.id}`}>
        Edit
      </Link>
      <p>
        Reorder:{" "}
        <button
          ref={upRef}
          type="button"
          disabled={onReorderUp === undefined}
          onClick={() => {
            const shouldRefocus = document.activeElement === upRef.current;
            onReorderUp?.().then(() => {
              if (shouldRefocus) {
                setRefocus(Math.random());
              }
            });
          }}
        >
          Up
        </button>
        <button
          ref={downRef}
          type="button"
          disabled={onReorderDown === undefined}
          onClick={() => {
            const shouldRefocus = document.activeElement === downRef.current;
            onReorderDown?.().then(() => {
              if (shouldRefocus) {
                setRefocus(Math.random());
              }
            });
          }}
        >
          Down
        </button>
      </p>
    </div>
  );
}

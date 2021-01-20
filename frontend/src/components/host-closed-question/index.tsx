import React from "react";
import { HostClosedQuestionComponentFragment } from "generated/graphql";

interface ClosedQuestionProps {
  currentQuestion: HostClosedQuestionComponentFragment;
  onScoreQuestion: (input: { answerId: string; correct: boolean }) => void;
  onNextQuestion: (nextQuestionId: string) => void;
  onEndGame: () => void;
}

export function HostClosedQuestion({
  currentQuestion,
  onScoreQuestion,
  onNextQuestion,
  onEndGame,
}: ClosedQuestionProps) {
  return (
    <>
      {currentQuestion?.closedQuestionAnswers.map((answer) => {
        return (
          <div>
            <h3>
              {answer.team.name}: {answer.value}
            </h3>
            <button
              disabled={answer.correct !== null && answer.correct}
              onClick={() => {
                onScoreQuestion({ answerId: answer.id, correct: true });
              }}
            >
              Right
            </button>
            <button
              disabled={answer.correct !== null && !answer.correct}
              onClick={() => {
                onScoreQuestion({ answerId: answer.id, correct: false });
              }}
            >
              Wrong
            </button>
          </div>
        );
      })}
      {currentQuestion?.next_question_state?.id === undefined ? (
        <button onClick={() => onEndGame()}>End Game</button>
      ) : (
        <button
          onClick={() => {
            onNextQuestion(currentQuestion?.next_question_state?.id);
          }}
        >
          Next Question
        </button>
      )}
    </>
  );
}

import { HostOpenQuestionComponentFragment, Team } from "generated/graphql";
import React from "react";

interface HostOpenQuestionProps {
  game: HostOpenQuestionComponentFragment;
  onCloseQuestion: (questionStateId: string) => void;
}

export function HostOpenQuestion({
  game,
  onCloseQuestion,
}: HostOpenQuestionProps) {
  return (
    <>
      <h1>{game.current_question?.question.question_text}</h1>
      <button
        onClick={() => {
          onCloseQuestion(game.current_question?.id);
        }}
      >
        Close Question
      </button>
      <Teams game={game} />
    </>
  );
}

function Teams({ game }: { game: HostOpenQuestionComponentFragment }) {
  const answeredTeams =
    game.current_question?.answers.map((answer) => answer.team.id) ?? [];
  const answeredTeamsIds = new Set(...answeredTeams);

  return (
    <>
      {game.teams.map(({ id, name }) => (
        <h2>
          {name}: {answeredTeamsIds.has(id) ? "answered" : "not answered"}
        </h2>
      ))}
    </>
  );
}

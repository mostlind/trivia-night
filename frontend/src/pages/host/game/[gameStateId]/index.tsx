import React from "react";
import {
  GameHostPageSubscription,
  useGameHostPageSubscription,
  useScoreQuestionMutation,
  useNextQuestionMutation,
  useCloseQuestionMutation,
  Question_State_Enum_Enum,
  useOpenQuestionMutation,
  useEndGameMutation,
} from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import { HostClosedQuestion } from "components/host-closed-question";
import { HostOpenQuestion } from "components/host-open-question";

export default function GameHostPage() {
  const router = useRouter();

  const { gameStateId } = router.query;
  const [game] = useGameHostPageSubscription({
    variables: {
      gameStateId,
    },
    pause: gameStateId === undefined,
  });

  if (game.error) {
    console.log(game.error);
    return <h1>Error... {game.error.message}</h1>;
  }

  if (game.data === undefined) {
    return <h1>Loading...</h1>;
  }

  const foundGame = game.data.game_state_by_pk;

  if (foundGame === undefined) {
    return <h1>Couldn't find that game</h1>;
  }

  return (
    <>
      <pre>{JSON.stringify(foundGame, null, 2)}</pre>
      <States foundGame={foundGame}></States>
    </>
  );
}

function States({
  foundGame,
}: {
  foundGame: GameHostPageSubscription["game_state_by_pk"];
}) {
  const [_scoreQuestionStatus, scoreQuestion] = useScoreQuestionMutation();
  const [_nextQuestionStatus, nextQuestion] = useNextQuestionMutation();
  const [_openQuestionStatus, openQuestion] = useOpenQuestionMutation();
  const [_closeQuestionStatus, closeQuestion] = useCloseQuestionMutation();
  const [_endGameStatus, endGame] = useEndGameMutation();

  switch (foundGame?.current_question?.state) {
    case Question_State_Enum_Enum.NotOpened: {
      return (
        <>
          <h1>Not Opened</h1>
          <button
            type="button"
            onClick={() =>
              openQuestion({ questionStateId: foundGame.current_question?.id })
            }
          >
            Open
          </button>
        </>
      );
    }

    case Question_State_Enum_Enum.Open: {
      return (
        <HostOpenQuestion
          game={foundGame}
          onCloseQuestion={(questionStateId) =>
            closeQuestion({ questionStateId })
          }
        />
      );
    }

    case Question_State_Enum_Enum.Closed: {
      return (
        <HostClosedQuestion
          onScoreQuestion={({ answerId, correct }) =>
            scoreQuestion({ answerId, correct })
          }
          onNextQuestion={(nextQuestionId) =>
            nextQuestion({
              gameStateId: foundGame.id,
              questionStateId: nextQuestionId,
            })
          }
          currentQuestion={foundGame.current_question}
          onEndGame={() => endGame()}
        />
      );
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

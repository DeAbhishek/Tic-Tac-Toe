import { GameState } from "./GameState";

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return (
        <div className="text-center border border-dashed border-indigo-500 p-2 mt-12 text-[1.5em]">
          O Wins
        </div>
      );
    case GameState.playerXWins:
      return (
        <div className="text-center border border-dashed border-indigo-500 p-2 mt-12 text-[1.5em]">
          X Wins
        </div>
      );
    case GameState.draw:
      return (
        <div className="text-center border border-dashed border-indigo-500 p-2 mt-12 text-[1.5em]">
          Draw
        </div>
      );

    default:
      return <></>;
  }
};

export default GameOver;

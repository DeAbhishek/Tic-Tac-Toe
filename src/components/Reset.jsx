import { GameState } from "./GameState";

const Reset = ({ gameState, onReset }) => {
  if (gameState === GameState.inProgress) return;
  return (
    <button
      className="mt-12 p-5 bg-sky-700 text-white w-full text-[1.5em]"
      onClick={onReset}
    >
      Reset
    </button>
  );
};

export default Reset;

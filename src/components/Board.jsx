import Strick from "./Strick";
import Tile from "./Tile";

const tilesArr = [
  "border-r-[0.2em] border-b-[0.2em] border-solid border-sky-700",
  "border-r-[0.2em] border-b-[0.2em] border-solid border-sky-700",
  "border-b-[0.2em] border-solid border-sky-700",
  "border-r-[0.2em] border-b-[0.2em] border-solid border-sky-700",
  "border-r-[0.2em] border-b-[0.2em] border-solid border-sky-700",
  "border-b-[0.2em] border-solid border-sky-700",
  "border-r-[0.2em] border-solid border-sky-700",
  "border-r-[0.2em] border-solid border-sky-700",
  "",
];

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
  return (
    <div className="grid grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px] cursor-pointer relative">
      {tilesArr.map((tile, index) => (
        <Tile
          key={index}
          playerTurn={playerTurn}
          onClick={() => onTileClick(index)}
          value={tiles[index]}
          className={tile}
        />
      ))}
      <Strick strikeClass={strikeClass} />
    </div>
  );
};

export default Board;

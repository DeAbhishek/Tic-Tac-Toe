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
      {/* <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="border-r-[0.2em] border-b-[0.2em] border-solid border-sky-700"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="border-r-[0.2em] border-b-[0.2em] border-solid border-sky-700"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className="border-b-[0.2em] border-solid border-sky-700"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="border-r-[0.2em] border-b-[0.2em] border-solid border-sky-700"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="border-r-[0.2em] border-b-[0.2em] border-solid border-sky-700"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="border-b-[0.2em] border-solid border-sky-700"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="border-r-[0.2em] border-solid border-sky-700"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="border-r-[0.2em] border-solid border-sky-700"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tiles[8]}
      /> */}
      <Strick strikeClass={strikeClass} />
    </div>
  );
};

export default Board;

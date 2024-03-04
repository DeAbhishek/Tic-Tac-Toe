const Tile = ({ className, value, onClick, playerTurn }) => {
  let hoverClass = null;
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center text-[2em] text-white ${className} ${hoverClass}`}
    >
      {value}
    </div>
  );
};

export default Tile;

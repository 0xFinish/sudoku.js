function SudokuBoardCells(props) {

  function clickedCell() {
    function updateExactValues(prev) {
      let a = [...prev];
      a[props.indexX][props.indexY] = " ";
      return a;
    }
    props.updateValue((prev) => updateExactValues(prev));
  }

  let style = {}

  if (props.val === " ") {
    style = {
      backgroundColor: "#28AFB0",
    };
  }

  return (
    <div className="SudokuBoardCells" onClick={clickedCell} style={style}>
      <p>{props.val}</p>
    </div>
  );
}

export { SudokuBoardCells };

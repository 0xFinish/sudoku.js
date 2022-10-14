function NumberValues(props) {
  function valuesClick() {
    function changeClickedValue(prevValue) {
      let newArray = [...prevValue];
      let x;
      let y;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (newArray[i][j] === " ") {
            x = i;
            y = j;
            break;
          }
        }
      }
      try {
      newArray[x][y] = props.num;}
      catch (e) {
      }
      return newArray;
    }

    props.updateCellValues((prev) => changeClickedValue(prev));
  }

  return (
    <div className="NumberValues" onClick={valuesClick}>
      <p>{props.num}</p>
    </div>
  );
}

export { NumberValues };

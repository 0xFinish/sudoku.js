import { sudokuSolver, generate } from "./sudokuSolver";
import { VscDebugRestart } from "react-icons/vsc";
import { MdOutlineDownloadDone } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";

function RestartButton(props) {

  const iconSize = 25

  return (
    <div className="RestartButton">
      <button
        className="ReloadButton"
        onClick={() => {
          location.reload();
        }}
      >
        Restart me
        <VscDebugRestart size={iconSize}></VscDebugRestart>
      </button>
      <button
        className="ReloadButton"
        onClick={() => {
          props.updateCellValues((prev) => {
            if (sudokuSolver(prev)[0][0] === undefined) {
              console.log("setIsNotSolvable true");
              props.setIsNotSolvable(true);
              return prev;
            } else {
              console.log("setIsNotSolvable false");
              props.setIsNotSolvable(false);
              return sudokuSolver(prev);
            }
          });
        }}
      >
        Complete the sudoku!{" "}
        <MdOutlineDownloadDone size={iconSize}></MdOutlineDownloadDone>
      </button>
      <button
        className="ReloadButton"
        onClick={() => {
          console.log("Generate");
          props.updateCellValues(generate());
        }}
      >
        Generate new board! <GiBackwardTime size={iconSize}></GiBackwardTime>
      </button>
    </div>
  );
}

export { RestartButton };

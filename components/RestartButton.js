import { sudokuSolver, generate } from "./sudokuSolver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faUpload,
  faArrowsRotate,
  faCheckCircle,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

function RestartButton(props) {
  return (
    <div className="RestartButton">
      <button
        onClick={() => {
          location.reload();
        }}
      >
        Restart me{" "}
        <FontAwesomeIcon
          icon={faArrowsRotate}
          scale={2}
          size="lg"
        ></FontAwesomeIcon>
      </button>
      <button
        onClick={() => {
          props.updateCellValues((prev) => {          
            if (sudokuSolver(prev)[0][0] === undefined) {
              console.log("setIsNotSolvable true")
              props.setIsNotSolvable(true);
              return prev
            } else {
              console.log("setIsNotSolvable false")
              props.setIsNotSolvable(false);
              return sudokuSolver(prev);
            }
          });
        }}
      >
        Complete the sudoku!{" "}
        <FontAwesomeIcon
          icon={faCheckCircle}
          scale={2}
          size="lg"
        ></FontAwesomeIcon>
      </button>
      <button
        onClick={() => {
          console.log("Generate");
          props.updateCellValues(generate());
        }}
      >
        Generate new board!{" "}
        <FontAwesomeIcon
          icon={faRotateRight}
          scale={2}
          size="lg"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}

export { RestartButton };

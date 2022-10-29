import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { git} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Navbar(props) {
  return (
    <div className="Navbar">
      <h3>Sudoku Game</h3>
      <button><a href="https://github.com/fi9ish/sudoku.js">Source code</a> <FontAwesomeIcon icon={faGithub} /></button>
    </div>
  );
}

export { Navbar };

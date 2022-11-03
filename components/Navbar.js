import { AiFillGithub } from "react-icons/ai"

function Navbar(props) {
  return (
    <div className="Navbar">
      <h3>Sudoku Game</h3>
      <button><a href="https://github.com/fi9ish/sudoku.js">Source code</a> <AiFillGithub size={24}></AiFillGithub></button>
    </div>
  );
}

export { Navbar };

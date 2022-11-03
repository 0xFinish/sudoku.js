import Image from "next/image";
import { AiFillGithub } from "react-icons/ai"

function Navbar(props) {
  return (
    <div className="Navbar">
      <h3>Sudoku Game</h3>
      <button><Image href="https://github.com/fi9ish/sudoku.js" alt="photo">Source code</Image> <AiFillGithub size={24}></AiFillGithub></button>
    </div>
  );
}

export { Navbar };

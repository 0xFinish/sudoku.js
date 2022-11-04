import Link from "next/link";
import { AiFillGithub } from "react-icons/ai"

function Navbar(props) {
  return (
    <div className="Navbar">
      <h3>Sudoku Game</h3>
      <button><Link href="https://github.com/fi9ish/sudoku.js" alt="photo">Source code</Link> <AiFillGithub size={24}></AiFillGithub></button>
    </div>
  );
}

export { Navbar };

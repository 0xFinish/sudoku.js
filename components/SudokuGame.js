import { Navbar } from './Navbar'
import { Timer } from './Timer'
import { SudokuEngine } from './SudokuEngine'
import { GameHistory } from './GameHistory'
import { GameDescription } from './GameDescription'
import { Footer } from './Footer'

function SudokuGame(props) {
    return (<div className='SudokuGame'>
        <Navbar></Navbar>
        <Timer></Timer>
        <SudokuEngine></SudokuEngine>
        <GameDescription></GameDescription>
        <GameHistory></GameHistory>
        <Footer></Footer>
    </div>)
}

export { SudokuGame }
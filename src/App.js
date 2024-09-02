import {useState} from 'react';
import './App.css';
import Board from './components/Board'

export default function Game() {
  const [xIsNext, setIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1]

  //creating a hnandlePlay function that will be called by the Board component to update the game
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]); //creates a new array that contains all itesm in history, followed by nextSquares
    //also want to toggle xIsNext, just as Board used to do:
    setIsNext(!xIsNext);
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  )
}

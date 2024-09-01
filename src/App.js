import {useState} from 'react';
import './App.css';
import Square from './Square';
//
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  return (
    <main>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </main>
  )
}


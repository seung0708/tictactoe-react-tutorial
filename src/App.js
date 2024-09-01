import {useState} from 'react';
import './App.css';
import Square from './Square';

export default function Board() {
  const [xIsNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)) {
      return;
    }
    //creating a copy of squares
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }

    //calling the setSquares function lets React knows the state of the component has changed
    setSquares(nextSquares)
    setIsNext(!xIsNext)
  }

  //to let the players know when the game is over
  const winner = calculateWinner(squares); 
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next play: " + xIsNext ? "X" : "O"
  }

  return (
    <main>
       <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </main>
  )
}

//helper function to tell who the winner is
function calculateWinner(squares) { 
  //takes an array of 9 squares
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    //checks to see if all 3 squares are the same
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  //or null: I guess this would be a tie
  return null;
}
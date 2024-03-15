import { useState } from "react";
import "./TicTacToe.css";
import { useEffect } from "react";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status,setStatus]=useState('');

  console.log(squares);

  const getWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  };

  const handleClick = (getCurrentSquare) => {
    let cpySquares = [...squares];
    if (getWinner(cpySquares)||cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  useEffect(()=>{
    if(!getWinner(squares) && squares.every(item=>item!=="")){
      setStatus("This game is a draw! Restart to play again.")
    }else if(getWinner(squares)){
      setStatus(`Winner is ${getWinner(squares)}! Restart to play again.`);
    }
    else{
      setStatus(`Now it is ${isXTurn?"X":"O"}'s turn`)
    }
  },[squares,isXTurn])

  const restartTheGame=()=>{
    setIsXTurn(true);
    setSquares(Array(9).fill(""))
  }

  return (
    <div className="ticTacToeContainer">
      <h1 style={{marginBottom:"20px"}} className="statusHeading">{status}</h1>
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <button className="restartBtn" onClick={restartTheGame}>Restart</button>
    </div>
  );
}

export default TicTacToe;

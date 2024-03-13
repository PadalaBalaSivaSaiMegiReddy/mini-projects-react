import "./TicTacToe.css";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

function TicTacToe() {
  return (
    <div className="ticTacToeContainer">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default TicTacToe;

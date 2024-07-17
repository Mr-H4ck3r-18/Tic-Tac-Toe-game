export default function GameOver({ winner,rematch }) {

    return (<div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>its a Draw!</p>}
        <p><button onClick={rematch}>Restart</button></p>
    </div>)
}
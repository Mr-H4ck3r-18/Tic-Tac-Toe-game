import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveCurrentPlayer(playerTurn) {
  let currentPlayer = 'X';

  if (playerTurn.length > 0 && playerTurn[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}

function App() {
  const [playerTurn, setPlayerTurn] = useState([]);
  const [players,setPlayers]=useState({'X':'Player 1','O':"Player 2"})

  let activePlayer = deriveCurrentPlayer(playerTurn)
  let gameBoard = [...initialBoard.map((innerArray)=>[...innerArray])]

  function handleRematch(){
    setPlayerTurn([])
  }

  for (const turn of playerTurn) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player

  }
  let Winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column]
    if(firstSymbol&&firstSymbol===secondSymbol&&firstSymbol===thirdSymbol){
      Winner=players[firstSymbol];
    }
  }
  function handleSelect(rowIndex, colIndex) {

    setPlayerTurn((prevTurn) => {
      let currentPlayer = deriveCurrentPlayer(prevTurn)
      const updated = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn,]
      return updated
    })
  }
  const hasDraw = playerTurn.length===9 && !Winner

  function handlePlayerName(symbol,newName){
    console.log(newName)
    setPlayers((prevPlayer)=>{
      return{
        ...prevPlayer,
        [symbol]:newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerName}/>
          <Player name="player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerName}/>
        </ol>
        {(Winner|| hasDraw) && <GameOver winner={Winner} rematch={handleRematch}/>}
        <GameBoard onSelect={handleSelect} turns={gameBoard} />
      </div>
      <Log actions={playerTurn} />
    </main>

  )
}

export default App

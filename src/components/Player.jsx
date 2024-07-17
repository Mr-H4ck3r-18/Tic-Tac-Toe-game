import { useState } from 'react';


export default function Player({ name, symbol,isActive ,onChangeName}) {
    const [clicked, setClicked] = useState(false);
    const [playerName,setPlayerName]=useState(name)
    const handdleEdit = () => {
        setClicked((editing)=>!editing)
        onChangeName(symbol,playerName)
    }
    function handleInput (e) {
        setPlayerName(e.target.value)
    }
    return (
        <li className={isActive?'active':undefined}>
            <span className="player">
                <span className="player-name">
                    {clicked ? <input id="player"  type="text" required onChange={handleInput} value={playerName}/>: playerName}
                </span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handdleEdit}> {clicked ? "Save" : "Edit"} </button>
        </li>
    )
}
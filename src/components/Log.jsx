export default function Log({actions}) {
    
    return <ol id="log">{actions.map((action,index)=><li key={index}>{action.player} selected {action.square.row} {action.square.col}</li>)}</ol>
}
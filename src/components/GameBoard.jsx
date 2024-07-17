
export default function GameBoard({ onSelect, turns }) {
    return (
        <ol id="game-board">
            {turns.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, columnIndex) => (
                            <li key={columnIndex}>
                                <button onClick={() => { onSelect(rowIndex, columnIndex) }}
                                    disabled={symbol != null}>{symbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}
import React, {useState} from "react";
import getSquaresNumber from '../API/GetSquaresNumber'


const Mode = ({startGame}) => {
    const [mode, setMode] = useState('0')

    async function getGameSettings() {
        if (mode !== '0') {
            const squaresNumber = await getSquaresNumber(mode)
            startGame(squaresNumber)
        }
    }
    return (
        <div className='settings'>
            <select className='select' defaultValue="0" onChange={event => setMode(event.target.value)}>
                <option value="0">Pick Mode</option>
                <option value="easyMode">Easy</option>
                <option value="normalMode">Normal</option>
                <option value="hardMode">Hard</option>
            </select>
            <button className='start' type="button" onClick={getGameSettings}>START</button>
        </div>

    )
}

export default Mode;

//export default async function GetSquaresNumber (mode) {
//     try {
//         const response = await fetch(URL)
//         const data = await response.json()
//         // debugger
//         return data[mode].field
//     } catch (e) {
//         console.log(e)
//     }
// }
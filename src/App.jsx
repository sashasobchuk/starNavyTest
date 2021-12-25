import React, {useEffect, useState} from 'react'
import './App.css'
import Mode from './components/mode'
import Cubs from './components/cubs'
import Logs from './components/logs'
import {createCubs} from './utils/functions'

function App() {
    const [cubs, setCubs] = useState([])
    const [cubNumbers, setCubNumbers] = useState(5)
    const [alerts, setAlerts] = useState([])
    const startGame = (squaresNumber) => {
        setCubs([])
        setAlerts([])
        makeCubs(squaresNumber)
    }
    const makeCubs = (cubNumbers) => {
        setCubNumbers(cubNumbers)
        setCubs(createCubs(cubNumbers))
    }
    useEffect(() => {
        startGame(cubNumbers)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cubNumbers])

    const hoverHandler = (e) => {
        const currentBackground = e.target.style.background
        const newBackgroundColor = (currentBackground === 'blue') ? 'white' : 'blue'
        e.target.style.background = newBackgroundColor
        log(e.target.id, newBackgroundColor)
    }
    const log = (key, style) => {
        (style === 'blue')
            ? setAlerts(alerts.concat({id: ' ' + key}))
            : setAlerts(alerts.filter(alert => alert.id !== ' ' + key))
    }
    return (
        <div className='app'>
            <div className='left'>
                <Mode startGame={startGame}/>
                <Cubs hoverHandler={hoverHandler} cubs={cubs} cubNumbers={cubNumbers}/>
            </div>
            <div className='right'>
                <Logs alerts={alerts}/>
            </div>
        </div>
    );
}

export default App;

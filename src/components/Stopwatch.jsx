import { useRef, useState } from "react"
import React from 'react'
import './Stopwatch.css'

export default function Stopwatch() {

  const [display, setDisplay] = useState(0);
  const [running, setRunning] = useState(false);
  const timeOut = useRef(null);

  let btnRef = useRef()

  const start = () => {
    timeOut.current = setInterval(() => {
      setDisplay(display => ++display)
    }, 1000)
    setRunning(true)
  }

  const reset = () => {
    setRunning(false)
    setDisplay(0)
    window.clearInterval(timeOut.current)
  }

  const pause = () => {
    setRunning(false)
    window.clearInterval(timeOut.current)
  }

  return (
    <div className="stopwatch">
      <h1>{display}</h1>
      <div className="controls">
        <button onClick={reset}>Reset</button>
        <button disabled={running === true} onClick={start}>start</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  )
}

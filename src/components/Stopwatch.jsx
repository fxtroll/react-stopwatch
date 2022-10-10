import { useRef, useState } from "react"
import React from 'react'

export default function Stopwatch() {

  const [display, setDisplay] = useState(0);
  const [running, setRunning] = useState(false);
  const timeOut = useRef(null);

  let btnRef = useRef()

  return (
    <div className="stopwatch">
      <h1>{display}</h1>
      <div className="controls">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  )
}

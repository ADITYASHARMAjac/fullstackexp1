import { useEffect, useRef, useState } from 'react'
import './App.css'

function formatTime(milliseconds) {
  const totalMilliseconds = Math.max(0, milliseconds)
  const minutes = Math.floor(totalMilliseconds / 60000)
  const seconds = Math.floor((totalMilliseconds % 60000) / 1000)
  const centiseconds = Math.floor((totalMilliseconds % 1000) / 10)

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(
    centiseconds,
  ).padStart(2, '0')}`
}

function App() {
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState([])
  const startTime = useRef(0)
  const elapsedRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!running) {
      return undefined
    }

    startTime.current = Date.now() - elapsedRef.current
    timerRef.current = window.setInterval(() => {
      const value = Date.now() - startTime.current
      elapsedRef.current = value
      setElapsed(value)
    }, 16)

    return () => window.clearInterval(timerRef.current)
  }, [running])

  const toggleTimer = () => setRunning((current) => !current)

  const resetTimer = () => {
    setRunning(false)
    setElapsed(0)
    elapsedRef.current = 0
    setLaps([])
  }

  const addLap = () => {
    if (!elapsed) {
      return
    }

    setLaps((current) => [formatTime(elapsed), ...current].slice(0, 5))
  }

  return (
    <main className="shell stopwatch-shell">
      <section className="panel stopwatch-panel">
        <p className="eyebrow">Mini Project 2</p>
        <h1>Stopwatch</h1>
        <p className="lead">Track intervals with lap capture and a simple start-stop flow.</p>

        <div className="time-ring">
          <span>{formatTime(elapsed)}</span>
        </div>

        <div className="controls">
          <button type="button" className="primary" onClick={toggleTimer}>
            {running ? 'Pause' : 'Start'}
          </button>
          <button type="button" onClick={addLap} disabled={!elapsed}>
            Lap
          </button>
          <button type="button" className="ghost" onClick={resetTimer}>
            Reset
          </button>
        </div>

        <div className="status-row">
          <span>{running ? 'Running now' : 'Stopped'}</span>
          <span>{laps.length} laps</span>
        </div>

        <div className="lap-list">
          {laps.length ? (
            laps.map((lap, index) => (
              <article key={`${lap}-${index}`}>
                <span>Lap {laps.length - index}</span>
                <strong>{lap}</strong>
              </article>
            ))
          ) : (
            <p className="empty-state">No laps recorded yet.</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default App

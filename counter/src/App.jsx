import { useState } from 'react'
import './App.css'

const step = 5

function App() {
  const [count, setCount] = useState(0)

  const changeCount = (amount) => {
    setCount((current) => Math.max(0, current + amount))
  }

  return (
    <main className="shell">
      <section className="panel hero-panel">
        <p className="eyebrow">Mini Project 1</p>
        <h1>Counter</h1>
        <p className="lead">
          A clean counter with step controls, reset, and a quick status summary.
        </p>

        <div className="counter-display" aria-live="polite">
          <span>{count}</span>
        </div>

        <div className="controls">
          <button type="button" onClick={() => changeCount(-step)}>
            -{step}
          </button>
          <button type="button" className="primary" onClick={() => changeCount(1)}>
            +1
          </button>
          <button type="button" onClick={() => changeCount(step)}>
            +{step}
          </button>
          <button type="button" className="ghost" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <div className="meta-grid">
          <article>
            <strong>Direction</strong>
            <span>{count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Neutral'}</span>
          </article>
          <article>
            <strong>Absolute</strong>
            <span>{Math.abs(count)}</span>
          </article>
          <article>
            <strong>Parity</strong>
            <span>{count % 2 === 0 ? 'Even' : 'Odd'}</span>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App

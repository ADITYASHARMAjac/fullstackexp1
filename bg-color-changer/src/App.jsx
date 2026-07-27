import { useState } from 'react'
import './App.css'

const colors = ['#0f172a', '#7c2d12', '#14532d', '#312e81', '#831843', '#1d4ed8']

function App() {
  const [backgroundColor, setBackgroundColor] = useState(colors[0])

  const randomColor = () => {
    const nextColor = colors[Math.floor(Math.random() * colors.length)]
    setBackgroundColor(nextColor)
  }

  return (
    <main className="shell color-shell" style={{ background: backgroundColor }}>
      <section className="panel color-panel">
        <p className="eyebrow">Mini Project 4</p>
        <h1>Background Color Changer</h1>
        <p className="lead">
          Switch the page mood with one click or pick a tone from the palette.
        </p>

        <div className="color-preview" style={{ background: backgroundColor }}>
          <span>{backgroundColor}</span>
        </div>

        <div className="palette">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              className={backgroundColor === color ? 'swatch active' : 'swatch'}
              style={{ background: color }}
              onClick={() => setBackgroundColor(color)}
              aria-label={`Set background to ${color}`}
            />
          ))}
        </div>

        <div className="controls">
          <button type="button" className="primary" onClick={randomColor}>
            Random color
          </button>
          <button type="button" className="ghost" onClick={() => setBackgroundColor(colors[0])}>
            Reset
          </button>
        </div>
      </section>
    </main>
  )
}

export default App

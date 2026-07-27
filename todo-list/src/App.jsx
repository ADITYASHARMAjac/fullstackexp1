import { useMemo, useState } from 'react'
import './App.css'

const seedTasks = [
  { id: 1, text: 'Plan the UI layout', done: true },
  { id: 2, text: 'Wire up add and delete', done: false },
  { id: 3, text: 'Polish the empty state', done: false },
]

function App() {
  const [tasks, setTasks] = useState(seedTasks)
  const [draft, setDraft] = useState('')

  const completedCount = useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks],
  )

  const remainingCount = tasks.length - completedCount

  const addTask = () => {
    const text = draft.trim()
    if (!text) {
      return
    }

    setTasks((current) => [
      { id: Date.now(), text, done: false },
      ...current,
    ])
    setDraft('')
  }

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )
  }

  const removeTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks((current) => current.filter((task) => !task.done))
  }

  return (
    <main className="shell todo-shell">
      <section className="panel todo-panel">
        <p className="eyebrow">Mini Project 3</p>
        <h1>Todo List</h1>
        <p className="lead">
          Capture tasks fast, tick them off, and keep the list focused.
        </p>

        <div className="composer">
          <input
            type="text"
            value={draft}
            placeholder="Add a new task"
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && addTask()}
          />
          <button type="button" className="primary" onClick={addTask}>
            Add task
          </button>
        </div>

        <div className="summary-row">
          <span>{tasks.length} total</span>
          <span>{remainingCount} left</span>
          <span>{completedCount} done</span>
        </div>

        <div className="task-list">
          {tasks.length ? (
            tasks.map((task) => (
              <article key={task.id} className={task.done ? 'task done' : 'task'}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span>{task.text}</span>
                </label>
                <button type="button" className="ghost" onClick={() => removeTask(task.id)}>
                  Delete
                </button>
              </article>
            ))
          ) : (
            <div className="empty-state">
              <strong>All clear.</strong>
              <p>Add a task to get started.</p>
            </div>
          )}
        </div>

        <div className="footer-actions">
          <button type="button" className="ghost" onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      </section>
    </main>
  )
}

export default App

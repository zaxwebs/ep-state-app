import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import './App.css'

function App() {
  const count = useStoreState((state) => state.counter.count)
  const delta = useStoreState((state) => state.counter.delta)
  const increment = useStoreActions((actions) => actions.counter.increment)
  const decrement = useStoreActions((actions) => actions.counter.decrement)
  const reset = useStoreActions((actions) => actions.counter.reset)
  const set = useStoreActions((actions) => actions.counter.set)
  const updateDelta = useStoreActions((actions) => actions.counter.updateDelta)

  return (
    <div className="app">
      <div className="counter">
        <div className="count">{count}</div>
        <div className="controller">
          <input
            type="number"
            onChange={(e) => updateDelta(e.target.value)}
            value={delta}
          ></input>
          <div className="buttons">
            <button onClick={() => increment()}>Add</button>
            <button onClick={() => decrement()}>Subtract</button>
            <button onClick={() => set()}>Set</button>
            <button onClick={() => reset()}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

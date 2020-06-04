import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import './App.css'

function App() {
  const count = useStoreState((state) => state.counter.count)
  const increment = useStoreActions((actions) => actions.counter.increment)
  const decrement = useStoreActions((actions) => actions.counter.decrement)

  return (
    <div className="app">
      <div className="counter">
        <div className="count">{count}</div>
        <div className="controller">
          <button onClick={() => increment()}>Add</button>
          <button onClick={() => decrement()}>Subtract</button>
        </div>
      </div>
    </div>
  )
}

export default App

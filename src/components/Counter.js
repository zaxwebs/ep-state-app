import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Counter = () => {
  const count = useStoreState((state) => state.counter.count)
  const contrast = useStoreState((state) => state.counter.contrast)
  const increment = useStoreActions((actions) => actions.counter.increment)
  const decrement = useStoreActions((actions) => actions.counter.decrement)
  const reset = useStoreActions((actions) => actions.counter.reset)
  const set = useStoreActions((actions) => actions.counter.set)
  const updateContrast = useStoreActions(
    (actions) => actions.counter.updateContrast
  )

  return (
    <div className="counter">
      <div className="count">{count}</div>
      <div className="controller">
        <input
          type="number"
          onChange={(e) => updateContrast(e.target.value)}
          value={contrast}
        ></input>
        <div className="buttons">
          <button onClick={() => increment()}>Add</button>
          <button onClick={() => decrement()}>Subtract</button>
          <button onClick={() => set()}>Set</button>
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Counter

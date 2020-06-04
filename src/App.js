import React from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div className="app">
      <Counter />
      <p>
        This is a demo counter that utilizes Easy-peasy.js for state management.
      </p>
      <p>
        Easy-peasy.js offers an intuitive API and is based on React.js context
        API and Redux.
      </p>
      <p>
        Since it works off of Redux, it mitigates the problem of re-renders as
        with vanilla Context API.
      </p>
      <p>Designed and developed by Zack Webster.</p>
    </div>
  )
}

export default App

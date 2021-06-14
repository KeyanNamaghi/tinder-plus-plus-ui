import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDemo } from './actions'
import logo from './logo.svg'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { demo } = useSelector((state) => state)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => dispatch(toggleDemo())}> dispatch call</button>

        {demo && (
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        )}
      </header>
    </div>
  )
}

export default App

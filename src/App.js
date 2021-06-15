import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FETCH_IMAGE_REQUEST } from './actions'
import logo from './logo.svg'
import './App.css'

const pic = 'data:image/png;base64,'

function App() {
  const dispatch = useDispatch()
  const { image: imageState } = useSelector((state) => state)
  const { image } = imageState
  return (
    <div className="App">
      <header className="App-header">
        <img src={image || logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => dispatch(FETCH_IMAGE_REQUEST())}> dispatch call</button>

        {true && (
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        )}
      </header>
    </div>
  )
}

export default App

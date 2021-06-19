import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FETCH_IMAGE_REQUEST, FETCH_STOCK_IMAGES_REMOVE, FETCH_STOCK_IMAGES_REQUEST } from './actions'
import logo from './logo.svg'
import './App.css'

const onClickFn = (dispatch) => {
  dispatch(FETCH_STOCK_IMAGES_REQUEST())
  dispatch(FETCH_STOCK_IMAGES_REMOVE())
}

function App() {
  const dispatch = useDispatch()
  // const { image } = useSelector((state) => state.image)
  const { images } = useSelector((state) => state.stockImages)

  useEffect(() => {
    for (let index = 0; index < 4; index++) {
      dispatch(FETCH_STOCK_IMAGES_REQUEST())
    }
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <img src={images[0]?.url || logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => dispatch(FETCH_IMAGE_REQUEST())}> dispatch call</button>
        <button onClick={() => onClickFn(dispatch)}> FETCH_STOCK_IMAGES_REQUEST</button>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

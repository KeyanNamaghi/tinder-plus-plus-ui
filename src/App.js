import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FETCH_STOCK_IMAGES_REMOVE, FETCH_STOCK_IMAGES_REQUEST } from './actions'
import { LikeButton, PassButton, SuperButton } from './components/buttons'
import Image from './components/image/Image'
import './App.css'

const onClickFn = (dispatch) => {
  dispatch(FETCH_STOCK_IMAGES_REQUEST())
  dispatch(FETCH_STOCK_IMAGES_REMOVE())
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    for (let index = 0; index < 4; index++) {
      dispatch(FETCH_STOCK_IMAGES_REQUEST())
    }
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <div className="App-buttons">
          <PassButton onClick={() => onClickFn(dispatch)} />
          <SuperButton onClick={() => onClickFn(dispatch)} />
          <LikeButton onClick={() => onClickFn(dispatch)} />
        </div>
      </header>
    </div>
  )
}

export default App

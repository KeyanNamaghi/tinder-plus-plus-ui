import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FETCH_STOCK_IMAGES_REQUEST, LIKE_CURRENT_CARD_REQUEST } from './actions'
import { LikeButton, PassButton, SuperButton } from './components/buttons/Buttons'
import Image from './components/image/Image'
import './App.css'

const Stack = () => {
  const images = [<Image index={0} />, <Image index={1} />, <Image index={2} />, <Image index={3} />]
  return <div style={{ display: 'grid' }}>{images}</div>
}

const onClickFn = (dispatch) => {
  dispatch(LIKE_CURRENT_CARD_REQUEST())
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // Populate the first 3 images
    for (let index = 0; index < 3; index++) {
      dispatch(FETCH_STOCK_IMAGES_REQUEST())
    }
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <Stack />
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

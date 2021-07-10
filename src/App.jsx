import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useToast } from './hooks/useToast'
import {
  FETCH_STOCK_IMAGES_REQUEST,
  SUPER_LIKE_CURRENT_CARD_REQUEST,
  LIKE_CURRENT_CARD_REQUEST,
  PASS_CURRENT_CARD_REQUEST
} from './actions'
import { LikeButton, PassButton, SuperButton } from './components/buttons/Buttons'
import Image from './components/image/Image'
import { capitalise } from './utils/utils'
import './App.css'

const Stack = () => {
  const images = [
    <Image index={0} key="image-0" />,
    <Image index={1} key="image-1" />,
    <Image index={2} key="image-2" />,
    <Image index={3} key="image-3" />
  ]
  return <div style={{ display: 'grid' }}>{images}</div>
}

function App() {
  const dispatch = useDispatch()
  const { getToast } = useToast()

  useEffect(() => {
    // Populate the first 3 images
    for (let index = 0; index < 3; index++) {
      dispatch(FETCH_STOCK_IMAGES_REQUEST())
    }
  }, [dispatch])

  const handlePassClicked = () => {
    getToast()
    dispatch(PASS_CURRENT_CARD_REQUEST())
  }

  return (
    <div className="App">
      <header className="App-header">
        {process.env.NODE_ENV !== 'production' && (
          <span className="App-node-env">🚀 {capitalise(process.env.NODE_ENV)}</span>
        )}
        <Stack />
        <div className="App-buttons">
          <PassButton onClick={() => handlePassClicked()} />
          <SuperButton onClick={() => dispatch(SUPER_LIKE_CURRENT_CARD_REQUEST())} />
          <LikeButton onClick={() => dispatch(LIKE_CURRENT_CARD_REQUEST())} />
        </div>
        <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />
      </header>
    </div>
  )
}

export default App

import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../logo.svg'

const Image = () => {
  const { images } = useSelector((state) => state.stockImages)

  return <img src={images[0]?.url || logo} className="App-logo" alt="logo" />
}

export default Image

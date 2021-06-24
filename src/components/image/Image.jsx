import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import logo from '../../logo.svg'
import { LikeText, PassText } from '../ImageText/ImageText'
import './Image.css'

const Image = ({ primary = false }) => {
  const { images } = useSelector((state) => state.stockImages)
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
  const [likeActive, setLikeActive] = useState(false)
  const [passActive, setPassActive] = useState(false)
  const [superActive, setSuperActive] = useState(false)
  const inputRef = useRef()

  const bind = useDrag(({ down, movement: [mx, my], cancel }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0 })

    if (down) {
      if (mx > 50) {
        setLikeActive(true)
        setPassActive(false)
      }
      if (mx < -50) {
        setPassActive(true)
        setLikeActive(false)
      }
    } else {
      setLikeActive(false)
      setPassActive(false)
    }
  })

  return (
    <animated.div ref={inputRef} {...bind()} style={{ x, y }} className={`Image-container Image-primary`}>
      <div className="Image">
        <LikeText active={likeActive} />
        <PassText active={passActive} />
        <img src={images[primary ? 0 : 1]?.url || logo} className="Image Image-element" alt="logo" />
      </div>
    </animated.div>
  )
}

export default Image

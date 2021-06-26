import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import logo from '../../logo.svg'
import { LikeText, PassText } from '../ImageText/ImageText'
import './Image.css'

const Image = ({ current, toggle, index }) => {
  const { images } = useSelector((state) => state.stockImages)
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  const [likeActive, setLikeActive] = useState(false)
  const [passActive, setPassActive] = useState(false)
  const [superActive, setSuperActive] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    if (index === (current + 2) % 4) {
      console.log({ current, index })
      x.start(0)
    }
  }, [current])

  const bind = useDrag(({ active, down, movement: [mx, my], direction: [xDir] }) => {
    api.start(() => {
      const isGone = mx > 300 && !active

      if (isGone) {
        toggle((index + 1) % 4)
      }

      const x = isGone ? 200 + window.innerWidth : active ? mx : 0
      return { x: x, y: down ? my : 0 }
    })

    if (down) {
      if (mx > 0) {
        setLikeActive(true)
        setPassActive(false)
      }
      if (mx < 0) {
        setPassActive(true)
        setLikeActive(false)
      }
    } else {
      setLikeActive(false)
      setPassActive(false)
    }
  })

  return (
    <animated.div
      ref={inputRef}
      {...bind()}
      style={{ x, y }}
      className={`Image-container ${current === index ? 'Image-primary' : ''} ${
        current === (index + 2) % 4 ? 'Image-hidden' : `Image-${index}`
      }`}
    >
      <div className="Image">
        <LikeText active={likeActive} />
        <PassText active={passActive} />
        <img src={images[index]?.url || logo} className="Image Image-element" alt="logo" />
      </div>
    </animated.div>
  )
}

export default Image

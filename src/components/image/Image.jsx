import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import { LIKE_CURRENT_CARD_REQUEST } from '../../actions'

import logo from '../../logo.svg'
import { LikeText, PassText } from '../ImageText/ImageText'
import './Image.css'

const Image = ({ index }) => {
  const { stockImages, cards: cardState } = useSelector((state) => state)
  const dispatch = useDispatch()

  const { images } = stockImages
  const { cards, currentIndex } = cardState
  const cardInfo = cards[index]
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  const [likeActive, setLikeActive] = useState(false)
  const [passActive, setPassActive] = useState(false)
  const [superActive, setSuperActive] = useState(false)
  const inputRef = useRef()

  // Return to origin
  useEffect(() => {
    if (index === (currentIndex + 2) % 4) {
      x.set(0)
      setLikeActive(false)
      setPassActive(false)
    }

    if (cardInfo.offscreen) {
      setLikeActive(true)
      x.start(200 + window.innerWidth)
    }
  }, [currentIndex])

  const bind = useDrag(({ active, down, movement: [mx, my] }) => {
    api.start(() => {
      const isGone = mx > 300 && !active

      if (isGone) {
        dispatch(LIKE_CURRENT_CARD_REQUEST())
        return { x: 200 + window.innerWidth, y: 0 }
      }

      const x = cardInfo.offscreen ? 200 + window.innerWidth : active ? mx : 0
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
      className={`Image-container ${currentIndex === index ? 'Image-primary' : ''} ${
        currentIndex === (index + 2) % 4 ? 'Image-hidden' : `Image-${index}`
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

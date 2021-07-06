import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import { LIKE_CURRENT_CARD_REQUEST, FETCH_STOCK_IMAGES_UPDATE_REQUEST } from '../../actions'

import logo from './logo.svg'
import { LikeText, PassText } from './ImageText'
import './Image.css'

const Image = ({ index }) => {
  const { stockImages, cards: cardState } = useSelector((state) => state)
  const dispatch = useDispatch()

  const { images } = stockImages
  const { cards, currentIndex } = cardState
  const cardInfo = cards[index]

  // https://react-spring.io/common/configs
  const config = { tension: 50, friction: 10 }
  const [{ x, y }, api] = useSpring(() => ({ x: cardInfo.offscreen ? 200 + window.innerWidth : 0, y: 0, config }))

  const [likeActive, setLikeActive] = useState(false)
  const [passActive, setPassActive] = useState(false)
  // const [superActive, setSuperActive] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    if (index === (currentIndex + 2) % 4) {
      // Return to origin
      x.set(0)
      setLikeActive(false)
      setPassActive(false)
      // TODO: This updates the image once it's reset. The if statement is a horrible hack to stop it firing before setting up
      // Need to do this properly.
      if (images[0]) {
        dispatch(FETCH_STOCK_IMAGES_UPDATE_REQUEST(index))
      }
    }

    if (cardInfo.offscreen) {
      setLikeActive(true)
      x.start(200 + window.innerWidth)
    }
    // eslint-disable-next-line
  }, [currentIndex])

  const bind = useDrag(({ active, down, movement: [mx, my], tap }) => {
    if (tap) console.log('tap')

    api.start(() => {
      // Swipe right
      if (mx > 200 && !active) {
        dispatch(LIKE_CURRENT_CARD_REQUEST())
        return { x: 200 + window.innerWidth, y: 0 }
      }

      const x = cardInfo.offscreen ? 200 + window.innerWidth : active ? mx : 0
      return { x: x, y: down ? my : 0 }
    })

    if (down) {
      if (mx > 30) {
        setLikeActive(true)
        setPassActive(false)
      } else if (mx < -30) {
        setPassActive(true)
        setLikeActive(false)
      } else {
        setPassActive(false)
        setLikeActive(false)
      }
    } else {
      setLikeActive(false)
      setPassActive(false)
    }
  })

  const demoNames = ['Näide', 'Příklad', '예', 'Tauira']

  return (
    <animated.div
      ref={inputRef}
      {...bind()}
      style={{ x, y }}
      className={`Image-container ${currentIndex === index ? 'Image-primary' : ''} ${
        currentIndex === (index + 1) % 4 ? 'Image-primary--top' : ''
      } ${currentIndex === (index + 2) % 4 ? 'Image-hidden' : `Image-${index}`}`}
    >
      <div className="Image">
        <LikeText active={likeActive} />
        <PassText active={passActive} />
        <strong className="Image-name">{demoNames[index]}</strong>
        <img src={images[index]?.url || logo} className="Image Image-element" alt="logo" />
      </div>
    </animated.div>
  )
}

export default Image

import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import {
  LIKE_CURRENT_CARD_REQUEST,
  FETCH_STOCK_IMAGES_UPDATE_REQUEST,
  SUPER_LIKE_CURRENT_CARD_REQUEST,
  PASS_CURRENT_CARD_REQUEST
} from '../../actions'

import logo from './logo.svg'
import { LikeText, PassText, SuperText } from './ImageText'
import './Image.css'
import { Tabs, useTabs } from '../tabs/Tabs'
import { useToast } from '../../hooks/useToast'

const Image = ({ index }) => {
  const { position, left, right } = useTabs(4)
  const { stockImages, cards: cardState } = useSelector((state) => state)
  const dispatch = useDispatch()
  const { getToast } = useToast()
  const [stateActive, setStateActive] = useState('')
  const inputRef = useRef()

  const { images } = stockImages
  const { cards, currentIndex } = cardState
  const cardInfo = cards[index]

  // https://react-spring.io/common/configs
  const config = { tension: 100, friction: 20 }
  const [{ x, y }, api] = useSpring(() => ({
    x: cardInfo.offscreen === 'like' ? 200 + window.innerWidth : 0,
    y: cardInfo.offscreen === 'super' ? -200 - window.innerHeight : 0,
    config
  }))

  useEffect(() => {
    if (index === (currentIndex + 2) % 4) {
      x.set(0)
      y.set(0)
      setStateActive('')
      // TODO: This updates the image once it's reset. The if statement is a horrible hack to stop it firing before setting up
      // Need to do this properly.
      if (images[0]) {
        dispatch(FETCH_STOCK_IMAGES_UPDATE_REQUEST(index))
      }
    }

    if (cardInfo.offscreen === 'like') {
      setStateActive('like')
      x.start(200 + window.innerWidth)
    }

    if (cardInfo.offscreen === 'super') {
      setStateActive('super')
      y.start(-200 - window.innerHeight)
    }
    // eslint-disable-next-line
  }, [currentIndex])

  const bind = useDrag(({ active, down, movement: [mx, my], tap, event }) => {
    if (tap) {
      const side = event.clientX - window.innerWidth / 2 > 0 ? 'right' : 'left'
      if (side === 'left') {
        left()
      } else {
        right()
      }
    }

    api.start(() => {
      if (mx > 200 && !active) {
        dispatch(LIKE_CURRENT_CARD_REQUEST())
        return { x: 200 + window.innerWidth, y: 0 }
      }

      if (mx < -200 && !active) {
        dispatch(PASS_CURRENT_CARD_REQUEST())
        getToast()
        return { x: 0, y: 0 }
      }

      if (my < -100 && !active) {
        dispatch(SUPER_LIKE_CURRENT_CARD_REQUEST())
        return { x: 0, y: -200 - window.innerHeight }
      }

      const x = cardInfo.offscreen === 'like' ? 200 + window.innerWidth : active ? mx : 0
      const y = cardInfo.offscreen === 'super' ? -200 - window.innerHeight : active ? my : 0

      return { x, y }
    })

    if (down) {
      if (mx > 50) {
        setStateActive('like')
      } else if (mx < -50) {
        setStateActive('pass')
      } else if (my < -50) {
        setStateActive('super')
      } else {
        setStateActive('')
      }
    } else {
      setStateActive('')
    }
  })

  const demoNames = ['N??ide', 'P????klad', '???', 'Tauira']

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
        <Tabs length={4} position={position} />
        <LikeText active={stateActive === 'like'} />
        <PassText active={stateActive === 'pass'} />
        <SuperText active={stateActive === 'super'} />
        <strong className="Image-name">{demoNames[index]}</strong>
        <img src={images[index]?.url || logo} className="Image Image-element" alt="logo" />
      </div>
    </animated.div>
  )
}

export default Image

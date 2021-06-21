import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import logo from '../../logo.svg'
import './Image.css'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

const LikeText = ({ active }) => {
  const { x } = useSpring({
    from: { opacity: 0, x: 0 },
    x: active ? 1 : 0,
    config: { duration: 100 }
  })

  const style = {
    opacity: x.to({ range: [0, 1], output: [0, 1] })
  }

  return (
    <animated.span className="Image-action-label Image-element Image-action-label--like" style={style}>
      LIKE
    </animated.span>
  )
}

const PassText = ({ active }) => {
  const { x } = useSpring({
    from: { opacity: 0, x: 0 },
    x: active ? 1 : 0,
    config: { duration: 100 }
  })

  const style = {
    opacity: x.to({ range: [0, 1], output: [0, 1] })
  }

  return (
    <animated.span className="Image-action-label Image-element Image-action-label--pass" style={style}>
      PASS
    </animated.span>
  )
}

const Image = () => {
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
    <animated.div ref={inputRef} className="Image" {...bind()} style={{ x, y }}>
      <LikeText active={likeActive} />
      <PassText active={passActive} />
      <img src={images[0]?.url || logo} className="Image Image-element" alt="logo" />
    </animated.div>
  )
}

export default Image

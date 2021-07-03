import React from 'react'
import { useSpring, animated } from '@react-spring/web'

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

export { LikeText, PassText }

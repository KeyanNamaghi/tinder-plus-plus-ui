import React, { useState } from 'react'
import Image from '../Image/Image'

/*
0 - active 
1 - behind
2 - offscreen
*/

const Stack = () => {
  const [current, setCurrent] = useState(0)

  const images = [
    <Image index={0} current={current} toggle={setCurrent} />,
    <Image index={1} current={current} toggle={setCurrent} />,
    <Image index={2} current={current} toggle={setCurrent} />,
    <Image index={3} current={current} toggle={setCurrent} />
  ]

  return <div style={{ display: 'grid' }}>{images}</div>
}

export default Stack

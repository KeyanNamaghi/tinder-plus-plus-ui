import React from 'react'
import Image from '../Image/Image'

const Stack = () => {
  const images = [<Image index={0} />, <Image index={1} />, <Image index={2} />, <Image index={3} />]
  return <div style={{ display: 'grid' }}>{images}</div>
}

export default Stack

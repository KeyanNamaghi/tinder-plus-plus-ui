import React, { useState } from 'react'
import './Tabs.css'

export const Tabs = ({ position = 0, length }) => {
  const tabList = []
  for (let index = 0; index < length; index++) {
    tabList.push(
      <span
        key={'tabIndex:' + index}
        className={`Tabs-individual ${position === index && 'Tabs-individual--active'}`}
      />
    )
  }
  return <div className="Tabs">{tabList}</div>
}

export const useTabs = (length) => {
  const [position, setPosition] = useState(0)

  const left = () => setPosition(position > 0 ? position - 1 : 0)
  const right = () => setPosition(position < length - 1 ? +position + 1 : length - 1)

  console.log({ length, position, left, right })

  return { position, left, right }
}

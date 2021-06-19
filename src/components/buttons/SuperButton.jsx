import React from 'react'
import { Super } from '../icons'
import './Button.css'

const SuperButton = ({ onClick }) => {
  return (
    <div className="Button PassButton">
      <button className="Button-circle" onClick={onClick}>
        <Super className="Button-symbol" />
      </button>
    </div>
  )
}

export { SuperButton }

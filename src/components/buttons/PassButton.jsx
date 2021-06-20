import React from 'react'
import { Pass } from '../icons'
import './Button.css'

const PassButton = ({ onClick }) => {
  return (
    <div className="Button">
      <button className="Button-circle" onClick={onClick}>
        <Pass className="Button-symbol" />
      </button>
    </div>
  )
}

export { PassButton }

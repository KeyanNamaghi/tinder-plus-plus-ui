import React from 'react'
import { Like } from '../Icons'
import './Button.css'

const LikeButton = ({ onClick }) => {
  return (
    <div className="Button">
      <button className="Button-circle" onClick={onClick}>
        <Like className="Button-symbol" />
      </button>
    </div>
  )
}

export { LikeButton }

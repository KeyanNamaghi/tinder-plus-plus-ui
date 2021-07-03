import React from 'react'
import { Like, Pass, Super } from './Icons'
import './Button.css'

export const LikeButton = ({ onClick }) => {
  return (
    <div className="Button">
      <button className="Button-circle" onClick={onClick}>
        <Like className="Button-symbol" />
      </button>
    </div>
  )
}

export const PassButton = ({ onClick }) => {
  return (
    <div className="Button">
      <button className="Button-circle" onClick={onClick}>
        <Pass className="Button-symbol" />
      </button>
    </div>
  )
}

export const SuperButton = ({ onClick }) => {
  return (
    <div className="Button-small">
      <button className="Button-circle" onClick={onClick}>
        <Super className="Button-symbol" />
      </button>
    </div>
  )
}

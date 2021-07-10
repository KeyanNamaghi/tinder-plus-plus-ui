import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { randomArrayElement, filterIndexFromArray } from '../utils/utils'

const text = [
  'What is actually wrong with you?',
  'That must have been a misclick',
  'Who hurt you?',
  'I bet you are fun at parties',
  'Really?',
  'Why are you like this?',
  'Seek help',
  'Why are you so negative?',
  'How do you sleep at night?',
  'How can you look at yourself in the mirror?',
  'Therapy might be the answer for you',
  'Try again',
  'Seek medical help for that cold dead heart of yours',
  'Is everything ok at home?',
  'You need to sit yourself down and decide are happy with the person you have become',
  "I can't believe you've done this",
  'Maybe you just need to visit the opticians'
]

export const useToast = () => {
  const [messages, setMessages] = useState(text)
  const getToast = () => {
    const { element, index } = randomArrayElement(messages)
    const newMessages = filterIndexFromArray(messages, index)
    setMessages(newMessages)
    toast.error(<div className="Toast-error">{element}</div>)
  }

  useEffect(() => {
    if (messages.length === 0) {
      setMessages(text)
    }
  }, [messages])

  return { getToast }
}

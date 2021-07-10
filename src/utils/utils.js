export const capitalise = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const randomArrayElement = (messages) => {
  const index = Math.floor(Math.random() * messages.length)
  return { element: messages[index], index }
}

export const filterIndexFromArray = (arr, index) => arr.filter((_, i) => i !== index)

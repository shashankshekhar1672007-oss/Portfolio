import { useEffect, useState } from 'react'

export function useTypingEffect(words) {
  const [text, setText] = useState(words[0] || '')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (words.length === 0) return undefined

    const currentWord = words[wordIndex % words.length]
    const isWordComplete = text === currentWord
    const isWordDeleted = text === ''

    const timer = setTimeout(() => {
      if (isDeleting && isWordDeleted) {
        setIsDeleting(false)
        setWordIndex((previousIndex) => previousIndex + 1)
        return
      }

      if (!isDeleting && isWordComplete) {
        setIsDeleting(true)
        return
      }

      const nextLength = text.length + (isDeleting ? -1 : 1)
      setText(currentWord.slice(0, nextLength))
    }, getTypingDelay({ isDeleting, isWordComplete, isWordDeleted }))

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words])

  return text
}

function getTypingDelay({ isDeleting, isWordComplete, isWordDeleted }) {
  if (isWordComplete) return 1500
  if (isWordDeleted) return 500
  return isDeleting ? 50 : 150
}

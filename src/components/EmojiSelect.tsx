import React from 'react'
import { Emoji } from '../models/Emojis'

interface DataProps {
  emojis: Emoji[]
}

const EmojiSelect = ({ emojis }: DataProps): JSX.Element => {
  const mappedElement = emojis.map((emoji) => (
    <p key={emoji.char}>{emoji.char}</p>
  ))
  return <div>{mappedElement}</div>
}

export default EmojiSelect

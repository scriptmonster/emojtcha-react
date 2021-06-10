import React, { useState } from 'react'
import { Emoji, takeRandom } from '../models/Emojis'

interface DataProps {
  emojis: Emoji[]
}

const EmojiSelect = ({ emojis }: DataProps): JSX.Element => {
  const [correctEmoji] = useState<Emoji>(takeRandom(emojis))
  const mappedElement = emojis.map((emoji) => (
    <p key={emoji.char}>{emoji.char}</p>
  ))
  return (
    <div>
      <p>Please select {correctEmoji.name}</p>
      {mappedElement}
    </div>
  )
}

export default EmojiSelect

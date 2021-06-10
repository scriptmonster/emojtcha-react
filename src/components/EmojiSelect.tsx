import React from 'react'
import { messup } from '../helpers/String'
import { Emoji, takeRandom } from '../models/Emojis'

interface DataProps {
  emojis: Emoji[]
}

const EmojiSelect = ({ emojis }: DataProps): JSX.Element => {
  const correctEmoji = takeRandom(emojis)
  const mappedElement = emojis.map((emoji) => (
    <p className="emojiselect-item" key={emoji.char}>
      {emoji.char}
    </p>
  ))
  return (
    <div className="emojiselect-container">
      <p className="emojiselect-title">
        Please select <span>{messup(correctEmoji.name)}</span>
      </p>
      <div className="emojiselect-items">{mappedElement}</div>
    </div>
  )
}

export default EmojiSelect

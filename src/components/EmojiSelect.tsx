import React, { useState } from 'react'
import { messup } from '../helpers/String'
import { Emoji, takeRandom } from '../models/Emojis'

interface DataProps {
  emojis: Emoji[]
}

const EmojiSelect = ({ emojis }: DataProps): JSX.Element => {
  const [correctEmoji] = useState<Emoji>(takeRandom(emojis))
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const getSelectItemClass = (index: number) =>
    selectedIndex === index
      ? 'emojiselect-item emojiselect-item-selected'
      : 'emojiselect-item'
  const mappedElement = emojis.map((emoji, index) => (
    <button
      type="button"
      className={getSelectItemClass(index)}
      onClick={() => setSelectedIndex(index)}
      key={emoji.char}
    >
      {emoji.char}
    </button>
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

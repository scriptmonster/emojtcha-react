import React, { useState, useCallback, useEffect } from 'react'
import { Emoji } from '../models/Emojis'
import * as Emojis from '../models/Emojis'
import defaultEmojiSet from '../emojis.json'
import EmojiSelect from './EmojiSelect'
import './EmojiCha.css'

interface DataProps {
  emojiSet?: Emoji[]
  drawCount?: number
}

const EmojiCha = ({
  emojiSet = defaultEmojiSet,
  drawCount = 5,
}: DataProps): JSX.Element => {
  const [emojis] = useState<Emoji[]>(emojiSet)
  const [roster, setRoster] = useState<Emoji[]>(Emojis.shuffledCopy(emojis))
  const [emojiSelection, setEmojiSelection] = useState<Emoji[]>(
    Emojis.takeFor(roster, drawCount),
  )

  const refresh = useCallback(() => {
    const selection = Emojis.takeFor(roster, drawCount)
    setEmojiSelection(selection)
    setRoster(Emojis.shuffledCopy(emojis))
  }, [drawCount, emojis, roster])

  useEffect(() => {
    setRoster(Emojis.shuffledCopy(emojis))
  }, [emojis])

  return (
    <div className="emojicha-box">
      <button type="button" onClick={() => refresh()}>
        Refresh
      </button>
      {emojiSelection && (
        <EmojiSelect
          key={emojiSelection.map((v) => v.char).join('')}
          emojis={emojiSelection}
        />
      )}
    </div>
  )
}

export default EmojiCha

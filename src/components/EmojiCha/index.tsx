import React, { useState, useEffect } from 'react'
import { Box } from './styled'
import { Emoji } from '../../models/Emojis'
import * as Emojis from '../../models/Emojis'
import defaultEmojiSet from '../../emojis.json'
import EmojiSelect from '../EmojiChaSelect'

interface DataProps {
  emojiSet?: Emoji[]
  drawCount?: number
}

const EmojiCha = ({
  emojiSet = defaultEmojiSet,
  drawCount = 6,
}: DataProps): JSX.Element => {
  const [emojis] = useState<Emoji[]>(emojiSet)
  const [roster, setRoster] = useState<Emoji[]>(Emojis.shuffledCopy(emojis))
  const [emojiSelection] = useState<Emoji[]>(Emojis.takeFor(roster, drawCount))

  useEffect(() => {
    setRoster(Emojis.shuffledCopy(emojis))
  }, [emojis])

  return (
    <Box>
      <EmojiSelect
        key={emojiSelection.map((v) => v.char).join('')}
        emojis={emojiSelection}
      />
    </Box>
  )
}

export default EmojiCha

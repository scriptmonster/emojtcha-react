import React, { useState, useEffect } from 'react'
import { Box } from './styled'
import { Emoji } from '../../models/Emojis'
import * as Emojis from '../../models/Emojis'
import defaultEmojiSet from '../../emojis.json'
import EmojiSelect from '../EmojiSelect'
import { EmojiSelectOption } from '../../models/EmojiSelectOption'

interface DataProps {
  emojiSet?: Emoji[]
  drawCount?: number
  emojiSelectOption?: EmojiSelectOption
}

interface ActionProps {
  onSelect: (isCorrect: boolean) => void
}

type Props = DataProps & ActionProps

const EmojtCha = ({
  emojiSet = defaultEmojiSet,
  drawCount = 6,
  emojiSelectOption,
  onSelect,
}: Props): JSX.Element => {
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
        emojiSelectOption={emojiSelectOption}
        onSelect={onSelect}
      />
    </Box>
  )
}

export default EmojtCha

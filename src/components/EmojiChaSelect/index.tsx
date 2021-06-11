import React, { useState } from 'react'
import { getOrEmpty } from '../../helpers/Functions'
import { formattedMessedUp } from '../../helpers/String'
import { Emoji, takeRandom } from '../../models/Emojis'
import {
  EmojiSelectOption,
  ItemOption,
  NameOption,
} from '../../models/EmojiSelectOption'
import { Container, Item, Items, Name, Title } from './styled'

interface DataProps {
  emojis: Emoji[]
  emojiSelectOption?: EmojiSelectOption
}

const EmojiSelect = ({ emojis, emojiSelectOption }: DataProps): JSX.Element => {
  const [correctEmoji] = useState<Emoji>(takeRandom(emojis))
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const mappedElement = emojis.map((emoji, index) => (
    <Item
      isSelected={selectedIndex === index}
      itemOption={getOrEmpty<ItemOption>(emojiSelectOption?.item)}
      onClick={() => setSelectedIndex(index)}
      key={emoji.char}
    >
      {emoji.char}
    </Item>
  ))
  return (
    <Container>
      <Title>
        Please select{' '}
        <Name nameOption={getOrEmpty<NameOption>(emojiSelectOption?.name)}>
          {formattedMessedUp(correctEmoji.name)}
        </Name>
      </Title>
      <Items>{mappedElement}</Items>
    </Container>
  )
}

export default EmojiSelect

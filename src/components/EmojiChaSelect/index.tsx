import React, { useState } from 'react'
import { formattedMessedUp } from '../../helpers/String'
import { Emoji, takeRandom } from '../../models/Emojis'
import { Container, Item, Items, Name, Title } from './styled'

interface DataProps {
  emojis: Emoji[]
}

const EmojiSelect = ({ emojis }: DataProps): JSX.Element => {
  const [correctEmoji] = useState<Emoji>(takeRandom(emojis))
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const mappedElement = emojis.map((emoji, index) => (
    <Item
      isSelected={selectedIndex === index}
      onClick={() => setSelectedIndex(index)}
      key={emoji.char}
    >
      {emoji.char}
    </Item>
  ))
  return (
    <Container>
      <Title>
        Please select <Name>{formattedMessedUp(correctEmoji.name)}</Name>
      </Title>
      <Items>{mappedElement}</Items>
    </Container>
  )
}

export default EmojiSelect

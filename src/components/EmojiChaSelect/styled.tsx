import styled from 'styled-components'
import { getOrElse } from '../../helpers/Functions'
import { ItemOption, NameOption } from '../../models/EmojiSelectOption'

export const Title = styled.p`
  background: white;
  min-width: 210px;
  padding: 5px 10px;
  margin: 0 0 10px 0;
  border-radius: 5px;
  text-align: center;
`

interface NameProps {
  readonly nameOption: NameOption
}

export const Name = styled.span`
  color: ${({ nameOption }: NameProps) =>
    nameOption.nameHighlight && getOrElse(nameOption.nameColor, 'red')};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Items = styled.div`
  display: flex;
  width: 90%;
  min-width: 210px;
  font-size: 1.6rem;
  justify-content: space-between;
`

interface ItemButtonProps {
  readonly isSelected: boolean
  readonly itemOption: ItemOption
}

export const Item = styled.button<ItemButtonProps>`
  background: ${(props: ItemButtonProps) =>
    props.isSelected
      ? `${getOrElse(
          props.itemOption.selectedBackgroundColor,
          'rgb(231, 231, 231)',
        )}!important`
      : 'white'};
  outline: none;
  border: 2px solid
    ${(props: ItemButtonProps) =>
      props.isSelected
        ? getOrElse(props.itemOption.selectedBorderColor, 'gray')
        : 'white'};
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;

  &:hover {
    background: ${({ itemOption }: ItemButtonProps) =>
      getOrElse(itemOption.hoverBackgroundColor, 'rgb(231, 231, 231)')};
    border: '2px solid ${({ itemOption }: ItemButtonProps) =>
      getOrElse(itemOption.hoverBorderColor, 'lightgray')}';
`

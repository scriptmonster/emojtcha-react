import styled from 'styled-components'

export const Title = styled.p`
  background: white;
  min-width: 210px;
  padding: 5px 10px;
  margin: 0 0 10px 0;
  border-radius: 5px;
  text-align: center;
`

export const Name = styled.span`
  color: red;
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
}

export const Item = styled.button<ItemButtonProps>`
  background: ${(props: ItemButtonProps) =>
    props.isSelected ? 'rgb(231, 231, 231)' : 'white'};
  outline: none;
  border: 2px solid
    ${(props: ItemButtonProps) => (props.isSelected ? 'gray' : 'white')};
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;

  &:hover {
    background: rgb(231, 231, 231);
  }
`

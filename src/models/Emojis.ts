import { compose } from '../helpers/Functions'

export interface Emoji {
  name: string
  char: string
}

export const shuffled = (emojiList: Emoji[]): Emoji[] =>
  emojiList.sort(() => 0.5 - Math.random())

export const copy = (emojiList: Emoji[]): Emoji[] => [...emojiList]

export const takeFor = (emojiList: Emoji[], n: number): Emoji[] =>
  emojiList.reduce(
    (accumulator: Emoji[], currentEmoji: Emoji, currentIndex: number) =>
      currentIndex < n ? accumulator.concat(currentEmoji) : accumulator,
    [],
  )

export const shuffledCopy = (emojiList: Emoji[]): Emoji[] =>
  compose(shuffled, copy)(emojiList)

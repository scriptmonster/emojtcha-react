import { compose } from '../helpers/Functions'

export interface Emoji {
  name: string
  char: string
}

function swap<T>(a: T, b: T): [T, T] {
  return [b, a]
}

export const shuffled = (emojiList: Emoji[]): Emoji[] => {
  const newShuffled: Emoji[] = [...emojiList]
  for (let i = emojiList.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const [a, b] = swap(newShuffled[i], newShuffled[j])
    newShuffled[i] = a
    newShuffled[j] = b
  }

  return newShuffled
}

export const copy = (emojiList: Emoji[]): Emoji[] => [...emojiList]

export const takeFor = (emojiList: Emoji[], n: number): Emoji[] =>
  emojiList.reduce(
    (accumulator: Emoji[], currentEmoji: Emoji, currentIndex: number) =>
      currentIndex < n ? accumulator.concat(currentEmoji) : accumulator,
    [],
  )

export const takeRandom = (emojiList: Emoji[]): Emoji => shuffled(emojiList)[0]

export const shuffledCopy = (emojiList: Emoji[]): Emoji[] =>
  compose(shuffled, copy)(emojiList)

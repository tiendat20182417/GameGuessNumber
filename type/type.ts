import { ViewProps } from 'react-native'

export type CardProp = ViewProps

export type InputProp = {
  enterValue: string
  setEnterValue: React.Dispatch<React.SetStateAction<string>>
}

export type NumberContainerProp = ViewProps

export type StartGameScreenProp = {
  onStartGame: (a: number | undefined) => void
}

export type GameScreenProp = {
  userChoice: number
  onGameOver: (a: number) => void
}

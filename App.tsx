import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
const App = () => {
  const [userNumber, setUserNumber] = useState<number | undefined>()
  const [guessRound, setGuessRound] = useState<number>(0)

  const startGameHandler = (selectNumber: number | undefined) => {
    setUserNumber(selectNumber)
    setGuessRound(0)
  }

  const gameOverHandler = (numberOfRound: number) => {
    setGuessRound(numberOfRound)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />
  if (userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRound > 0) {
    content = <GameOverScreen />
  }
  return (
    <>
      <Header />
      {content}
    </>
  )
}

export default App

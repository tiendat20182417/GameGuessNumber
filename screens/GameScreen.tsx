import React, { useRef, useState, useEffect } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import { GameScreenProp } from '../type/type'

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const rndNum = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

const GameScreen = ({ userChoice, onGameOver }: GameScreenProp) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice))

  const [rounds, setRounds] = useState<number>(0)
  const currentLow = useRef(1)
  const currentHight = useRef(100)

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoice, onGameOver])

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [{ text: 'sorry' }])
      return
    }
    if (direction === 'lower') {
      currentHight.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHight.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds((prev) => prev + 1)
  }
  return (
    <View className="items-center">
      <Text className="font-bold text-xl">Opponent's Guess </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card className="flex-row w-[80%] h-16 justify-around items-center">
        <TouchableOpacity className="bg-cyan-300 p-2 rounded-lg" onPress={() => nextGuessHandler('lower')}>
          <Text className="text-white">LOWER</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-cyan-300 p-2 rounded-lg" onPress={() => nextGuessHandler('greater')}>
          <Text className="text-white">GREATER</Text>
        </TouchableOpacity>
      </Card>
    </View>
  )
}

export default GameScreen

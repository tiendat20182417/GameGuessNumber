import React, { useState } from 'react'
import { Pressable, Text, View, TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import { StartGameScreenProp } from '../type/type'

const StartGameScreen = ({ onStartGame }: StartGameScreenProp) => {
  const [enterValue, setEnterValue] = useState<string>('')
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false)
  const [selectNumber, setSelectNumber] = useState<number>()

  const handleReset = () => {
    setEnterValue('')
    setIsConfirmed(false)
  }

  const handleConfirm = () => {
    const choseNumber = parseInt(enterValue)
    if (Number.isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number betweent 1 and 99', [
        { text: 'oke', onPress: handleReset },
      ])
      return
    }
    setIsConfirmed(true)
    setSelectNumber(choseNumber)
    setEnterValue('')
    Keyboard.dismiss()
  }

  let confirmedOutput

  if (isConfirmed) {
    confirmedOutput = (
      <Card className="w-1/2 flex-col items-center py-4">
        <Text className="pl-4 text-lg font-bold">You selected</Text>
        <NumberContainer>{selectNumber}</NumberContainer>
        <TouchableOpacity className="bg-cyan-500 rounded-xl w-[60%] " onPress={() => onStartGame(selectNumber)}>
          <Text className="text-lg text-center text-white">START GAME</Text>
        </TouchableOpacity>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      className="flex-1"
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View className="flex-col flex-1 items-center">
        <Text className="text-center font-extrabold text-xl">Start a New Game!</Text>
        <Card className="w-3/4 my-5 ">
          <View className="flex-col items-center ">
            <Text className="font-bold mt-5">Select a Number</Text>
            <Input enterValue={enterValue} setEnterValue={setEnterValue} />
          </View>
          <View className="flex-row items-center justify-center mb-4">
            <TouchableOpacity className="bg-violet-500 w-16 h-7 justify-center mr-14" onPress={handleReset}>
              <Text className="text-white text-center">Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-pink-500 w-16 h-7 justify-center " onPress={handleConfirm}>
              <Text className="text-white text-center">Confirm</Text>
            </TouchableOpacity>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen

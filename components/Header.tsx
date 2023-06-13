import React from 'react'
import { StatusBar, Text, View } from 'react-native'

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor={'rgb(219 39 119)'} />
      <View className="bg-pink-600 h-20 justify-center items-center">
        <Text className="text-xl font-bold">Guess a Number</Text>
      </View>
    </>
  )
}

export default Header

import React from 'react'
import { NumberContainerProp } from '../type/type'
import { View, Text } from 'react-native'
const NumberContainer = ({ children }: NumberContainerProp) => {
  return (
    <View className="border-2 border-violet-500 rounded-xl mx-8 my-4 w-16">
      <Text className="text-center text-4xl text-violet-500">{children}</Text>
    </View>
  )
}

export default NumberContainer

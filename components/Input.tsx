import React from 'react'
import { TextInput } from 'react-native'
import { InputProp } from '../type/type'
const Input = ({ enterValue, setEnterValue }: InputProp) => {
  const handleNumberInput = (newValue: string) => setEnterValue(newValue.replace(/[^0-9]/g, ''))

  return (
    <TextInput
      className="h-10 w-[20%]  my-4 text-center border-b-2 "
      keyboardType="number-pad"
      maxLength={2}
      value={enterValue}
      onChangeText={handleNumberInput}
    />
  )
}

export default Input

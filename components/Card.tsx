import React from 'react'
import { CardProp } from '../type/type'
import { styled } from 'nativewind'
import { View } from 'react-native'

const StyledView = styled(View)
const Card = ({ children, style }: CardProp) => {
  return (
    <StyledView style={style} className="shadow-xl shadow-black bg-white rounded-xl ">
      {children}
    </StyledView>
  )
}

export default Card

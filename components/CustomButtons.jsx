import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.9}
        className ={`rounded-full bg-white min-w-[200px] px-12 py-3 shadow-lg hover:bg-[#0C9359] hover:text-white transition-all duration-300 ease-in-out ${containerStyles} ${isLoading ? 'opacity-100': ''}`}
        disabled={isLoading}
    >
      <Text className ={`font-rblack text-2xl ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

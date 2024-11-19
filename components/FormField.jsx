import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import React, {useState} from 'react'
import images from '../constants/images';
import { FontAwesome } from '@expo/vector-icons';

const FormField = ({title, value, placeHolder, handleChangeText, otherStyles,...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-lg text-gray-100 font-pmedium left-[65px]">{title}</Text>     
      <View className="w-full h-14 px-10 bg-white-500 rounded-full border-2 border-gray-300 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-u_regular text-base"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? images.eye : images.hide_eye}
              className="w-6 h-6 left-4"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

      </View>
    </View>
  )
}

export default FormField
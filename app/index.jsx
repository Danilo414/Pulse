import { Text, View, Image } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import CustomButton from '../components/CustomButtons';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-teal-50 px-6">
      {/* Adjusted image width and height to fit properly */}
      <Image className="w-40 h-40 mb-8" source={require("../assets/icons/pulse.png")} />
      
      {/* Adjusted text alignment, sizes, and margins */}
      <Text className="text-6xl font-black text-teal-700 mb-4">Welcome</Text>
      <Text className="text-5xl font-black text-teal-700 mb-8">Pulse</Text>
      
      {/* Styled Link component for better appearance */}
      <CustomButton 
      title ="Login"
      containerStyles="mt-4 items-center"
      handlePress={()=> router.push('/login')}
      >
      </CustomButton>


      <CustomButton 
      title ="Register"
      containerStyles="mt-4 items-center"
      handlePress={()=> router.push('/signup')}
      >
      </CustomButton>
    </View>
  );
}


import React from 'react'
import { Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
   
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  




  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  )
}

export default MainLayout
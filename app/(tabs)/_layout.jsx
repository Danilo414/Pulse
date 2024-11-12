import { View, Text, Image} from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon,color,name,focused})=>{
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
    </View>
  )
}

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
            name="home"
            options={{
              title:'Home',
              headerShown:false,
              tabBarIcon: ({color,focused}) =>(
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name="Home"
                  focused={focused}
                />
              )
            }}
        />//end of Create Icon

        <Tabs.Screen
            name="chatting"
            options={{
              title:'Chatting',
              headerShown:false,
              tabBarIcon: ({color,focused}) =>(
                <TabIcon
                  icon={icons.chatting}
                  color={color}
                  name="Chatting"
                  focused={focused}
                />
              )
            }}
        />//end of Create Icon

        <Tabs.Screen
            name="information"
            options={{
              title:'Information',
              headerShown:false,
              tabBarIcon: ({color,focused}) =>(
                <TabIcon
                  icon={icons.information}
                  color={color}
                  name="Information"
                  focused={focused}
                />
              )
            }}
        />//end of Create Icon

        <Tabs.Screen
            name="pulse"
            options={{
              title:'Pulse',
              headerShown:false,
              tabBarIcon: ({color,focused}) =>(
                <TabIcon
                  icon={icons.pulse}
                  color={color}
                  name="Pulse"
                  focused={focused}
                />
              )
            }}
        />//end of Create Icon

<Tabs.Screen
            name="user"
            options={{
              title:'User',
              headerShown:false,
              tabBarIcon: ({color,focused}) =>(
                <TabIcon
                  icon={icons.user}
                  color={color}
                  name="User"
                  focused={focused}
                />
              )
            }}
        />//end of Create Icon

      </Tabs>
    </>
  )
}

export default TabLayout




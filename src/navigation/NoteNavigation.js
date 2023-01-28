import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotesScreen from '../screens/NotesScreen'
import NoteDetailScreen from '../screens/NoteDetailScreen'

const NoteNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="NotesScreen"
          component={NotesScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="NoteDetailScreen"
          component={NoteDetailScreen}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default NoteNavigation

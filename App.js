import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Header from './src/components/Header'
import colors from './src/constans/colors'
import { NotesProvider } from './src/contexts/NotesContext'
import NoteNavigation from './src/navigation/NoteNavigation'
import useNotesFonts from './src/hooks/useNotesFontes'

const PAGES = ['NotesScreen', 'NoteDetailScreen']

export default function App() {
  const fontLoaded = useNotesFonts()

  return (
    <NotesProvider>
      {fontLoaded && (
        <SafeAreaView style={styles.container}>
          <View style={styles.contentContainer}>
            <Header />
            <View style={styles.body}>
              <NoteNavigation />
            </View>
          </View>
        </SafeAreaView>
      )}
    </NotesProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'InconsolataSemiBold',
  },
  body: {
    flex: 1,
    width: '100%',
  },
})

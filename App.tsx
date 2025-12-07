import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from './components/TopBox'
import BottomBox from './components/BottomBox'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TopBar />
        <BottomBox />
      </View>
    </SafeAreaView>
  )
}

export default App
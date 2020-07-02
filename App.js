import React, { useState, useCallback } from 'react'
import { AppLoading } from 'expo'

import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import GameContainer from './Game'
import { FontImports } from './theme'

const fetchFonts = () => {
  return Font.loadAsync(FontImports())
}

const fetchIcons = () => {
  return Font.loadAsync(Ionicons.font)
}

const fetchTypography = () => Promise.all([fetchFonts(), fetchIcons()])


const App = prop => {
  const [loaded, setLoaded] = useState(false)

  const appLoadingSuccessHandler = useCallback(
    () => setLoaded(true),
    []
  )

  const appLoadingErrorHandler = useCallback(
    err => console.log(err),
    []
  )

  if(!loaded) return <AppLoading startAsync={fetchTypography} onFinish={appLoadingSuccessHandler} onError={appLoadingErrorHandler} />
  return <GameContainer />
}

export default App

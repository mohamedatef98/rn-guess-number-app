import React, { useState, useCallback } from 'react'
import { AppLoading } from 'expo'

import * as Font from 'expo-font'

import GameContainer from './Game'
import { FontImports } from './theme'

const fetchFonts = () => {
  return Font.loadAsync(FontImports())
}


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

  if(!loaded) return <AppLoading startAsync={fetchFonts} onFinish={appLoadingSuccessHandler} onError={appLoadingErrorHandler} />
  return <GameContainer />
}

export default App

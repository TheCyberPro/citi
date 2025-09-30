import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { StoreProvider } from './src/store'

export default function App() {
  return (
    <StoreProvider>
      <AppNavigator />
    </StoreProvider>
  )
}

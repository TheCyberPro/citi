// App.tsx
import 'react-native-gesture-handler';               // must be first
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { StoreProvider } from './src/store';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StoreProvider>
          <AppNavigator />
        </StoreProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from '../screens/Dashboard'
import Accounts from '../screens/Accounts'
import AccountDetail from '../screens/AccountDetail'

export type RootStackParamList = {
  Dashboard: undefined
  Accounts: undefined
  AccountDetail: { accountId: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Home' }} />
        <Stack.Screen name="Accounts" component={Accounts} options={{ title: 'Accounts' }} />
        <Stack.Screen
          name="AccountDetail"
          component={AccountDetail}
          options={{ title: 'Account Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

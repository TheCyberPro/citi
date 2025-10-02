import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useAccounts } from '../store'
import AccountCard from '../components/AccountCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/AppNavigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Accounts'>

export default function Accounts({ navigation }: Props) {
  const { accounts } = useAccounts()

  return (
    <View style={styles.container}>
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AccountCard
            account={item}
            onPress={() =>
              navigation.navigate('AccountDetail', { accountId: item.id })
            }
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
})

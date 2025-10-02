import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/AppNavigator'
import { useAccounts } from '../store'
import TransactionItem from '../components/TransactionItem'

type Props = NativeStackScreenProps<RootStackParamList, 'AccountDetail'>

export default function AccountDetail({ route }: Props) {
  const { accountId } = route.params
  const { accounts, transactions } = useAccounts()

  const account = accounts.find((a) => a.id === accountId)!
  const accountTransactions = transactions.filter((t) => t.accountId === accountId)

  const balanceStr = (account.balance / 100).toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{account.name}</Text>
      <Text style={styles.balance}>{balanceStr}</Text>

      <FlatList
        data={accountTransactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0A3069',
    padding: 16,
  },
  balance: {
    fontSize: 32,
    fontWeight: '700',
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#111827',
  },
  sep: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 16,
  },
})

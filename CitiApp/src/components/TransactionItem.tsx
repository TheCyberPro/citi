import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Transaction } from '../store'
import { format } from 'date-fns'

type Props = { transaction: Transaction }

export default function TransactionItem({ transaction }: Props) {
  const date = format(new Date(transaction.date), 'MMM d, yyyy')
  const amt = (Math.abs(transaction.amount) / 100).toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })
  const isDebit = transaction.amount < 0

  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.desc}>{transaction.description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={[styles.amount, isDebit ? styles.debit : styles.credit]}>
        {isDebit ? '-' : '+'}{amt}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: { flex: 1 },
  desc: { fontSize: 16, color: '#111827' },
  date: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  amount: { fontSize: 16, fontWeight: '600' },
  credit: { color: '#10B981' },
  debit: { color: '#EF4444' },
})

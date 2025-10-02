import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Account } from '../store'
import { format } from 'date-fns'

type Props = {
  account: Account
  onPress: () => void
}

export default function AccountCard({ account, onPress }: Props) {
  const dollars = (account.balance / 100).toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{account.name}</Text>
      <Text style={styles.number}>{account.number}</Text>
      <Text style={styles.balance}>{dollars}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    // subtle shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0A3069',
  },
  number: {
    fontSize: 14,
    color: '#6B7280',
    marginVertical: 4,
  },
  balance: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginTop: 8,
  },
})

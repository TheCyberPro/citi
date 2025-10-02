// src/screens/Dashboard.tsx
import React from 'react'

// SafeAreaView ONLY from react-native-safe-area-context
import { SafeAreaView } from 'react-native-safe-area-context'

// All other primitives (StyleSheet, ScrollView, View, Text, StatusBar)
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native'

// useAccounts is exported directly from src/store/index.tsx
import { useAccounts } from '../store'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  const accounts = useAccounts()
  const total = accounts.reduce((sum, a) => sum + a.balance, 0)
  const totalStr = (total / 100).toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Your Accounts</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Total Balance</Text>
          <Text style={styles.balance}>{totalStr}</Text>
        </View>

        <Button
          title="View Accounts"
          onPress={() => navigation.navigate('Accounts')}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F7FA' },
  scroll: { padding: 24, alignItems: 'center' },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1C1410',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
    marginBottom: 32,
  },
  label: { fontSize: 16, color: '#6B7280', marginBottom: 8 },
  balance: { fontSize: 36, fontWeight: '700', color: '#FFC30B' },
})

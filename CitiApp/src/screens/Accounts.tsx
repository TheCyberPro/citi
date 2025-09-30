import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Accounts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accounts Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#0A3069',
  },
})

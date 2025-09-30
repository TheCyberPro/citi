import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'     // ← import your new Button

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="View Accounts"
        onPress={() => navigation.navigate('Accounts')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
  },
})


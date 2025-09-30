import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  Platform,
} from 'react-native'

type ButtonProps = {
  title: string
  onPress: (event: GestureResponderEvent) => void
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0A3069',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,

    ...Platform.select({
      ios: {
        shadowColor: '#0A6BE6',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 24,
      },
      android: {
        elevation: 16,
      },
      web: {
        boxShadow: '0 0 24px rgba(10,107,230,0.6)',
      },
    }),
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
})

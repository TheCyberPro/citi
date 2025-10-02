// src/components/CardControls.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const actions = ['Lock Card', 'Set Limits', 'View PIN'];

export default function CardControls() {
  return (
    <View style={s.row}>
      {actions.map((label) => (
        <TouchableOpacity key={label} style={s.btn}>
          <Text style={s.btnText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
  btn: {
    flex: 1,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FFC30B',
    alignItems: 'center',
  },
  btnText: { color: '#FFC30B', fontWeight: '600' },
});

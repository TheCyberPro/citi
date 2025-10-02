// src/components/TransactionsList.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummy = [
  { date: '2025-09-30', description: 'Stripe payout', amount: '+$3,200.00' },
  { date: '2025-09-29', description: 'Amazon AWS', amount: '-$120.50' },
  { date: '2025-09-28', description: 'Google Ads', amount: '-$450.00' },
];

export default function TransactionsList() {
  return (
    <FlatList
      data={dummy}
      keyExtractor={(_, i) => String(i)}
      renderItem={({ item }) => (
        <View style={s.row}>
          <Text style={s.date}>{item.date}</Text>
          <Text style={s.desc}>{item.description}</Text>
          <Text style={[s.amt, item.amount.startsWith('-') ? s.negative : s.positive]}>
            {item.amount}
          </Text>
        </View>
      )}
    />
  );
}

const s = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#EEE',
    alignItems: 'center',
  },
  date: { flex: 1, color: '#333' },
  desc: { flex: 2, color: '#333' },
  amt: { flex: 1, textAlign: 'right', fontWeight: '600' },
  negative: { color: '#E02424' },
  positive: { color: '#01684B' },
});

// src/components/BalanceCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  balance: string;
  subtitle: string;
}

export default function BalanceCard({ title, balance, subtitle }: Props) {
  return (
    <View style={s.card}>
      <Text style={s.title}>{title}</Text>
      <Text style={s.balance}>{balance}</Text>
      <Text style={s.subtitle}>{subtitle}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: { fontSize: 16, fontWeight: '600', color: '#1C1410' },
  balance: { fontSize: 24, fontWeight: '700', color: '#FFC30B', marginVertical: 8 },
  subtitle: { fontSize: 14, color: '#555' },
});

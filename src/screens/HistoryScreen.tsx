import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { loadTransactions, clearTransactions } from '../storage/transactions';
import type { Transaction } from '../types/Transactions';

export default function HistoryScreen() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    try {
      const data = await loadTransactions();
      setTransactions(data);
    } catch (error) {
      console.error('Erro ao carregar transações:', error);
    }
  };

  // Atualizacao
  useFocusEffect(
    useCallback(() => {
      fetchTransactions();
    }, [])
  );

  const handleClearHistory = () => {
    Alert.alert(
      'Confirmar',
      'Deseja apagar todo o histórico?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Apagar',
          style: 'destructive',
          onPress: async () => {
            await clearTransactions();
            setTransactions([]);
          },
        },
      ]
    );
  };

  return (
  <View className="flex-1 bg-gray-50 p-4">
    <Text className="text-2xl mt-20 font-bold mb-4">Minha Carteira</Text>

    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className='flex-row justify-between mb-3'>
          <Text className="text-base font-montserrat font-medium">
            {item.desc}
          </Text>
          <Text className={item.type === 'income' ? 'text-green-600' : 'text-red-600'} style={{ fontWeight: 'bold' }}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(item.value)}
          </Text>
        </View>
      )}
      ListEmptyComponent={<Text className="text-gray-500">Nenhuma transação encontrada.</Text>}
    />

    <TouchableOpacity onPress={handleClearHistory} className="bg-red-300 mt-4 p-3 rounded-xl">
      <Text className="text-black text-center font-semibold">Apagar Histórico</Text>
    </TouchableOpacity>
  </View>
);
}
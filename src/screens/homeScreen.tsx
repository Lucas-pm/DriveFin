import React, { useState, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import Header from '../components/Header';
import Balance from '../components/Balance';
import ActionButtons from '../components/ActionButtons';
import TransactionModal from '../components/TransactionModal';

import { saveTransactions, loadTransactions } from '../storage/transactions';
import { Transaction } from '../types/Transactions';

export default function HomeScreen() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [type, setType] = useState<'income' | 'expense' | null>(null);
  const [desc, setDesc] = useState('');
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Recarrega os dados sempre que a tela for focada
  useFocusEffect(
    useCallback(() => {
      loadTransactions().then((data) => {
        const validData = data.filter(
          (item: Transaction) => typeof item.value === 'number' && !isNaN(item.value)
        );
        setTransactions(validData);
      });
    }, [])
  );

  const addTransaction = () => {
    const numericValue = parseFloat(value.replace(',', '.')); 
    if (!desc || !value || !type || isNaN(numericValue)) return;

    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      desc,
      value: numericValue,
      date: new Date(),
    };

    const updatedTransactions = [newTransaction, ...transactions];
    setTransactions(updatedTransactions);
    saveTransactions(updatedTransactions);

    setDesc('');
    setValue('');
    setType(null);
    setModalVisible(false);
  };


  const total = transactions.reduce((acc, t) => {
    const valor = typeof t.value === 'number' ? t.value : parseFloat(t.value as any);
    if (isNaN(valor)) return acc;
    return t.type === 'income' ? acc + valor : acc - valor;
  }, 0);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="bg-cinza w-screen h-screen"
      >
        <Header />
        <Balance total={total} />
        <ScrollView>
          <ActionButtons
            onPressIncome={() => {
              setType('income');
              setModalVisible(true);
            }}
            onPressExpense={() => {
              setType('expense');
              setModalVisible(true);
            }}
          />
        </ScrollView>
        <TransactionModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmit={addTransaction}
          type={type}
          desc={desc}
          setDesc={setDesc}
          value={value}
          setValue={setValue}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}


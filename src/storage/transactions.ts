//Armazenamento
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Transaction } from '../types/Transactions';

const STORAGE_KEY = 'transactions';

export const saveTransactions = async (transactions: Transaction[]) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};

export const loadTransactions = async (): Promise<Transaction[]> => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  const parsed: Transaction[] = JSON.parse(data);
  return parsed.map((t) => ({ ...t, date: new Date(t.date) }));
};

export const clearTransactions = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
};
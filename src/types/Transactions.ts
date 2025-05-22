export interface Transaction {
  id: number;
  type: 'income' | 'expense';
  desc: string;
  value: number;
  date: Date;
}

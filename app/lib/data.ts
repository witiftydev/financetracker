export type Transaction = {
  id: number;
  date: string;
  amount: number;
  category: string;
};

export const transaction: Transaction[] = [
  { id: 1, date: "2024-01-01", amount: 100, category: "Food" },
  { id: 2, date: "2024-01-02", amount: 50, category: "Transport" },
  { id: 3, date: "2024-01-03", amount: 200, category: "Entertainment" },
  { id: 4, date: "2024-01-04", amount: 150, category: "Utilities" },
];

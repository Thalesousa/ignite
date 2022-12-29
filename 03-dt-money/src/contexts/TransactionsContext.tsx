import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface ITransactionContextType {
  transactions: ITransaction[]
}

interface ITransactionsProviderProps {
  children: ReactNode
}

const TransactionsContext = createContext({} as ITransactionContextType)

export function TransactionsProvider({children}: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function loadTransactions(){
    const resp = await fetch('http://localhost:3333/transactions')
    const data = await resp.json()
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactionContext() {
  return useContext(TransactionsContext)
}
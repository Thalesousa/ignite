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
  transactions: ITransaction[],
  fetchTransactions: (query?: string) => Promise<void>,
}

interface ITransactionsProviderProps {
  children: ReactNode
}

const TransactionsContext = createContext({} as ITransactionContextType)

export function TransactionsProvider({children}: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function fetchTransactions(query?: string){
    const url = new URL('http://localhost:3333/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const resp = await fetch(url)
    const data = await resp.json()
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactionContext() {
  return useContext(TransactionsContext)
}
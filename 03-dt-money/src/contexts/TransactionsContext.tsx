import { ReactNode, useEffect, useState } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'
import { api } from '../lib/axios'

interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface ICreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface ITransactionContextType {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createdTransaction: (data: ICreateTransactionInput) => Promise<void>
}

interface ITransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionContextType)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function fetchTransactions(query?: string) {
    const { data } = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(data)
  }

  async function createdTransaction(data: ICreateTransactionInput) {
    const { description, category, price, type } = data

    const response = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createdTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactionContext() {
  return useContextSelector(TransactionsContext, (context) => {
    return context.createdTransaction
  })
}

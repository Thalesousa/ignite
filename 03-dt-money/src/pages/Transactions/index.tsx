import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearcForm";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";

interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
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
    <>
      <Header/>
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        
        <TransactionsTable>

          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}

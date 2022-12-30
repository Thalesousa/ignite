import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { useTransactionContext } from "../../contexts/TransactionsContext";
import { priceFormatter, dateFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearcForm";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";



export function Transactions() {
  const { transactions } = useTransactionContext()
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
                      {transaction.type === 'outcome' && '-'}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}

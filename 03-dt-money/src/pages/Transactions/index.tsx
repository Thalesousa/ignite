import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";

export function Transactions() {
  return (
    <>
      <Header/>
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de sites</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ R$ 50,00
                </PriceHighlight>
              </td>
              <td>Alimentanção</td>
              <td>14/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}

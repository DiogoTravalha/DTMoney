import { useContext } from "react";
import { format } from "date-fns";
import Header from "../../components/Header";
import Summary from "../../components/Summary";
import SearchForm from "./components/SearchForm";
import {
  PriceHighLigt,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";

export default function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((item) => (
              <tr key={item.id}>
                <td width="50%">{item.description}</td>
                <td>
                  <PriceHighLigt variant={item.type}>
                    {item.type === "outcome" && "- "}
                    {priceFormatter.format(item.price)}
                  </PriceHighLigt>
                </td>
                <td>{item.category}</td>
                <td>{format(new Date(item.createdAt), "dd-MM-yyyy")}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}

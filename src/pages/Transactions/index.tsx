import { useState } from "react";
import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter, dateFormatter } from "../../utils/formatter";
import { Pagination } from "./components/Pagination";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  DivCategoryList,
  TransactionsContainer,
  TransactionsList,
  TransactionsTable,
  DivInfosMobile,
} from "./styles";
import { CalendarBlank, TagSimple } from "phosphor-react";
import { SummaryCarousel } from "../../components/SummaryCarousel";

export function Transactions() {
  const isMobile = window.innerWidth <= 768;

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const [linksPerPage, setLinksPerPage] = useState(isMobile ? 15 : 5);
  const [currentPage, setCurrentPage] = useState(0);

  const [linkSelected, setLinkSelected] = useState(Object);

  // Pagination
  const pages = Math.ceil(transactions.length / linksPerPage);
  const startIndex = currentPage * linksPerPage;
  const endIndex = startIndex + linksPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  function handleSetCurrentPage(index: number) {
    setCurrentPage(index);
  }

  return (
    <div>
      <Header />

      {isMobile ? <SummaryCarousel /> : <Summary />}

      {/* <SummaryCarousel /> */}

      <TransactionsContainer>
        {isMobile ? (
          <DivInfosMobile>
            <p>Transações</p>

            <span>{transactions.length} itens</span>
          </DivInfosMobile>
        ) : (
          ""
        )}

        <SearchForm />

        {isMobile ? (
          <TransactionsList>
            {currentTransactions.map((transaction) => {
              return (
                <ul key={transaction.id}>
                  <li>
                    <p>{transaction.description}</p>

                    <PriceHighLight variant={transaction.type}>
                      {/* Se utilizar somente o &&  quando o if so se tem uma possibilidade */}
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>

                    <br />

                    <DivCategoryList>
                      <span>
                        <TagSimple size={24} />
                        {transaction.category}
                      </span>

                      <span>
                        <CalendarBlank size={24} />
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </span>
                    </DivCategoryList>
                  </li>
                </ul>
              );
            })}
          </TransactionsList>
        ) : (
          <TransactionsTable>
            <tbody>
              {currentTransactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {/* Se utilizar somente o &&  quando o if so se tem uma possibilidade */}
                        {transaction.type === "outcome" && "- "}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TransactionsTable>
        )}

        <Pagination
          pages={pages}
          currentPage={currentPage}
          onSetCurrentPage={handleSetCurrentPage}
        />
      </TransactionsContainer>
    </div>
  );
}

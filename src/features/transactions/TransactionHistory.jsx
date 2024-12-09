import { useState } from "react";
import { useSelector } from "react-redux";
//import { transfer, deposit, withdrawal } from "./transactionsSlice";
import "./transactionHistory.scss";

/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction: { type, amount, balance } }) => (
  <tr>
    <th scope="row">{type}</th>
    <td>{amount.toFixed(2)}</td>
    <td>{balance.toFixed(2)}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // TODO: Get the transaction history from the Redux store using the useSelector hook
  // const history = [];

  const history = useSelector((state) => state.transaction.history);
  console.log("history: ", history);

  // MAP ITERATOR
  function iterateHistory(item, key) {
    console.log('key', key);
    
    return (
      // <div key={key}>hello</div>
      <TransactionRow key={key} transaction={item} />
    );
  }

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO
          Map over the transactions in `history`
          to render the appropriate `TransactionRow`s
          */}
          {history.length>0 && history.map(iterateHistory)}
        </tbody>
      </table>
    </section>
  );
}

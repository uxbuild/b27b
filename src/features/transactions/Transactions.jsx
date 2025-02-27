import { useState } from "react";

// ADDED..
import { useSelector, useDispatch } from "react-redux";
import { transfer, deposit, withdrawal } from "./transactionsSlice";

import "./transactions.scss";

/**
 * Allows users to deposit to, withdraw from, and transfer money from their account.
 */

export default function Transactions() {
  // TODO: Get the balance from the Redux store using the useSelector hook
  // const balance = 0;
  const balance = useSelector((state) => state.transaction.balance);

  const [amountStr, setAmountStr] = useState("0.00");
  const [recipient, setRecipient] = useState("");
  const dispatch = useDispatch();

  /** Dispatches a transaction action based on the form submission. */
  const onTransaction = (e) => {
    e.preventDefault();

    // This changes depending on which button the user clicked to submit the form.
    // It will be either "deposit", "withdraw", or "transfer".
    const action = e.nativeEvent.submitter.name;

    if(parseInt(amountStr)!==0){
      const amount = +amountStr;
      // TODO: Dispatch the appropriate transaction action based on `action`
      switch (action) {
        case "transfer":
          dispatch(transfer({ amount, recipient }));
          break;
        case "withdraw":
          dispatch(withdrawal({ amount, recipient }));
          break;
        case "deposit":
          dispatch(deposit({ amount, recipient }));
          break;
        default:
          break;
      }
    };
    }

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figure>
        <figcaption>Current Balance &nbsp;</figcaption>
        <strong>${balance.toFixed(2)}</strong>
      </figure>
      <form onSubmit={onTransaction}>
        <div className="form-row">
          <label>
            Amount
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={amountStr}
              onChange={(e) => setAmountStr(e.target.value)}
            />
          </label>
          <div>
            <button default name="deposit">
              Deposit
            </button>
            <button name="withdraw">Withdraw</button>
          </div>
        </div>
        <div className="form-row">
          <label>
            Transfer to
            <input
              placeholder="Recipient Name"
              name="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </label>
          <button name="transfer">Transfer</button>
        </div>
      </form>
    </section>
  );
}

import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";
// TODO: Import the Redux store and provide it to this component using <Provider>.
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <main>
      <h1>Bank Account</h1>
      <Provider store={store}>
        <Transactions />
        <TransactionHistory />
      </Provider>
    </main>
  );
}

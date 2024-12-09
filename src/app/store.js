import { configureStore } from "@reduxjs/toolkit";

// TODO: Configure the store to use the reducer from the transactions slice.
import transaction from "../features/transactions/transactionsSlice";

export const store = configureStore({
  reducer: {
    transaction,
  },
});

// export default store;

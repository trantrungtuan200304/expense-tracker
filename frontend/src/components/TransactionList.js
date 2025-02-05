import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { Transaction } from "./Transaction.js";
export const TransactionList = () => {
  const { transactions, getAllTransactions} = useContext(GlobalContext);

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

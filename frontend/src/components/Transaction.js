import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState.js';
export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext);
  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => {deleteTransaction(transaction._id)}}>x</button>
      </li>
    </div>
  );
};

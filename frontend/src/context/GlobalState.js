import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
import axios from "axios";
// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const getAllTransactions = async () => {
    try {
      const url = "http://localhost:8000/api/transactions";
      const response = await axios.get(url);
      console.log(response);
      dispatch({
        type: "GET_TRANSACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
      console.log(id);
      await axios.delete(`http://localhost:8000/api/transactions/${id}`);
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

   const addTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const url = "http://localhost:8000/api/transactions";
      const response = await axios.post(url, transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getAllTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import React, { useContext, useEffect, useReducer } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  cartItems: cartItems,
  totalItems: 0,
  totalAmount: 0,
};

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}> {children} </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { Context, AppContext };

import React, { useContext, useEffect, useReducer } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  cartItems: cartItems,
  selectedItems: [],
  totalItems: 0,
  totalAmount: 0,
  category: [],
};

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterCategory = (category) => {
    dispatch({ type: "FILTER_MENU", payload: category });
  };

  const addtoCart = (id) => {
    dispatch({ type: "ADD_ITEM", payload: Number(id) });
  };

  const modifyItem = (e, id) => {
    const currentEl = e.target.parentNode.className;

    currentEl === "increase"
      ? dispatch({ type: "INCREASE_ITEMS", payload: id })
      : dispatch({ type: "DECREASE_ITEMS", payload: id });
  };

  useEffect(() => {
    const categories = [
      "all",
      ...new Set(cartItems.map((cart) => cart.category)),
    ];

    dispatch({ type: "LOAD_BTNS", payload: categories });
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, filterCategory, addtoCart, modifyItem }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { Context, AppContext };

import React, { useReducer, createContext, useContext } from "react";
import cartItems from "./data";
import reducer from "./reducer";
import { cartDynamicValue } from "./utils";
import { clear_item,display_quantity } from "./action";

const GlobalContextProvider = createContext();

export const getGlobalContext = () => useContext(GlobalContextProvider);


const initialValue = {
  cardData: cartItems,
  amount: 0,
  quantity:0
};

const GlobalContext = (props) => {
  

  const [currentValue, dispatch] = useReducer(reducer,initialValue );

  const {totalQuantity,totalCost} =cartDynamicValue(currentValue.cardData)

  // const calCartItems = ()=>{
  // return currentValue.cardData.length
  // }

  // const itemCount = calCartItems();

  // dispatch({type:display_quantity})
  return (
    <GlobalContextProvider.Provider value={{currentValue, dispatch,totalQuantity,totalCost}}>
      
      {props.children}
    </GlobalContextProvider.Provider>
  );
};

export default GlobalContext;

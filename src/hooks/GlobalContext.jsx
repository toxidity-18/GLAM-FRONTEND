// src/context/GlobalContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Create a Context
const GlobalContext = createContext();

// 2. Create a Provider Component
export const GlobalProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [allUser, setAllUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, seCart] = useState([]);
  const [fetchedCategories, setfetchedCategories] = useState([]);

console.log(user)

useEffect(() => {
let fromLocal = localStorage.getItem("active_user")

if(fromLocal){

  setUser(fromLocal === "true" ? true : null)
}


}, [])

  const addCart = (newProduct) => {
    seCart((prev) => [...prev, newProduct]);
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts,
        cart,
        addCart,
        seCart,
        fetchedCategories,
        setfetchedCategories,
        allUser,
        setAllUsers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

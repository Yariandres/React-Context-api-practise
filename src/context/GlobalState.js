import React, { createContext, useReducer } from 'react';

// INITIAL STATE
const initialState = {
  cards: [
    {
      city: "London",   
      tempMin: "5°C / 9°C",
      description: "Clouds",
      humidity: "20% Rain"
    },
    {
      city: "Berlin",   
      tempMin: "10°C / 14°C",
      description: "Sunny",
      humidity: "10% Rain"
    },
    {
      city: "Madrid",   
      tempMin: "14°C / 18°C",
      description: "Sunny",
      humidity: "9% Rain"
    },
  ],
}

// CREATE CONTEXT
export const GlobalContext = createContext(initialState);

// PROVIDER COMPONENT
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext.Provider value={{
      cards: state.cards
    }}>
    {children}
    </GlobalContext.Provider>
  )
}


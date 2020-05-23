import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// INITIAL STATE
const initialState = {
  cards: []
}

// CREATE CONTEXT
export const GlobalContext = createContext(initialState);

// PROVIDER COMPONENT
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {

    const localData = localStorage.getItem('cards');
    
    return localData ? JSON.parse(localData) : [];
  });

  // LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(state))
  }, [state]);

  // ACTIONS
  const addCard = (card) => {
    dispatch({
      type: 'ADD_CARD',
      payload: card
    })    
  }

  return (
    <GlobalContext.Provider value={{
      cards: state.cards,
      addCard
    }}>

    {children}
    </GlobalContext.Provider>
  )
}
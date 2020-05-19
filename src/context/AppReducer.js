export default (state, action) => {

  switch(action.type) {
    
    case 'ADD_CARD':
      return {
        cards: [action.payload, ...state.cards]
      }
    
    default:
    return state;
  }
}
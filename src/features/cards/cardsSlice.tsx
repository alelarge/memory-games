import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
    [key: number]: {
        visible: boolean;
        id: number;
        number: number;
    }
}
interface CardsState {
    selectedCards: Array<number>;
    cards: CardState;
}

const getInitialState = ():CardsState => {
  const cardOrder = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].sort(() => 0.5 - Math.random());
  let cards:CardState = {};
  for (let i = 0; i < cardOrder.length; i++) {
      const card = cardOrder[i];
      cards[i] = {
        visible: false,
        id: i,
        number: cardOrder[i],
      };
  }

  return {
    selectedCards: [],
    cards,
  }
} 

const initialState = getInitialState();
console.log('initialState', initialState);

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    clear: (state: CardsState, action: PayloadAction<null>) => state = initialState,
    selectCard: (state: CardsState, action: PayloadAction<number>) => {
        const cardId = action.payload;
        state.cards[cardId].visible = true;
        const selectedCard = state.cards[cardId];
        state.selectedCards.push(cardId);
        
        return state;
    },
    clearSelectedCards: (state: CardsState) => {
        if (state.selectedCards.length > 1) {
            if (state.cards[state.selectedCards[0]].number === state.cards[state.selectedCards[1]].number) {
            } else {
                state.cards[state.selectedCards[0]].visible = false;
                state.cards[state.selectedCards[1]].visible = false;
            }
            state.selectedCards = [];
        }
    }
  },
});

// Action creators are generated for each case reducer function
export const { clear, selectCard, clearSelectedCards } = cardsSlice.actions
export default cardsSlice.reducer

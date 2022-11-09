import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardsState {
    cardOrder: Array<number>;
    selectedCards: Array<number>;
}

const initialState: CardsState = {
    cardOrder: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].sort(() => 0.5 - Math.random()),
    selectedCards: []
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    clear: (state: CardsState, action: PayloadAction<null>) => state = initialState,
    selectCard: (state: CardsState, action: PayloadAction<number>) => {
        const selectedCard = state.cardOrder[action.payload];
        state.selectedCards.push(selectedCard);
        return state;
    }
  },
});

// Action creators are generated for each case reducer function
export const { clear, selectCard } = cardsSlice.actions
export default cardsSlice.reducer

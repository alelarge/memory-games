import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import cards from './features/cards/cardsSlice';
import controls from './features/controls/controlsSlice';

export const createStore = () =>
    configureStore({
      reducer: {
        cards,
        controls
      },
    });
  
export const store = createStore();
  
export const useAppDispatch = useDispatch;
export const useTypedSelector = useSelector;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
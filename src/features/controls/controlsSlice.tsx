import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ControlsState {
    gameState: string
}

let initialState:ControlsState = {
    gameState: 'ready'
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    start: (state: ControlsState) => {
        state.gameState = 'play';
        return state;
    },
    pause: (state: ControlsState) => {
        state.gameState = 'pause';
        return state;
    },
    win: (state: ControlsState) => {
        state.gameState = 'win';
        return state;
    },
    loose: (state: ControlsState) => {
        state.gameState = 'loose';
        return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { start, pause, win, loose } = controlsSlice.actions;
export default controlsSlice.reducer;

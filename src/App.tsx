import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.scss';
import CardContainer from './components/CardContainer/CardContainer';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ModalContainer from './components/Modal/ModalContainer';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="App">
          <h1>Memory Game</h1>
          <ModalContainer />
          <div className="App__cards-wraper">
            <CardContainer />
          </div>
          <ProgressBar />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;

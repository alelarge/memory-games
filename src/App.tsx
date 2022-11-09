import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import './App.scss';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  const [choise, setChoice] = useState<number>(0)
  const [Score, setScore] = useState<number>(
    parseInt(localStorage.getItem('Score') || '0') || Number.MAX_SAFE_INTEGER
  )

  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="App">
          <CardContainer />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;

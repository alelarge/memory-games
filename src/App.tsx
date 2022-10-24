import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
     <Card content='A' />
     <Card content='B' />
     <Card content='C' />
    </div>
  );
}

export default App;

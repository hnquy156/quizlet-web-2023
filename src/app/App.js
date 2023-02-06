import React from 'react';
import { Counter } from '../features/counter/Counter';
import { Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="text">Text</Button>
        <Counter />
      </header>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import {Display} from './components/Display';
import { Dashboard } from './components/Dashboard';
import './App.css';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);

  const addBall = () => {
    setBalls(balls + 1);
  }

  const addStrike = () => {
    setStrikes(strikes + 1);
  }

  const reset = () => {
    setBalls(0);
    setStrikes(0);
  }

  const addOut = () => {
    setOuts(outs + 1);
  }

  const resetAll = () => {
    setBalls(0);
    setStrikes(0);
    setOuts(0);
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} outs={outs}/>
      <Dashboard
        balls={balls}
        strikes={strikes}
        addBall={addBall}
        addStrike={addStrike}
        reset={reset}
        outs={outs}
        addOut={addOut}
        resetAll={resetAll}
      />
    </div>
  );
}

export default App;

import * as React from 'react';
import './App.css';
import { Hello } from './Hello';
import NumbersAPI from './components/NumbersAPI/NumbersAPI';

function App() {
  return (
    <div className="App">
      <Hello compiler="TypeScript" framework="React" />
      <NumbersAPI />
    </div>
  );
}

export default App;

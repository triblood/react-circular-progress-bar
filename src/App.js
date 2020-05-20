import React from 'react';
import './App.css';

import CircularProgressBar from './components/Circular-progress-bar';

function App() {
  return (
    <div className="App">
      <CircularProgressBar goal={100} balance={90} color="#ff0000"/>
    </div>
  );
}

export default App;

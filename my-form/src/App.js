import React from 'react';
import Controlled from './components/Controlled';
import Uncontrolled from './components/Uncontrolled';

const App = () => {
  return (
    <div>
      <h1>Form Examples</h1>
      <Controlled />
      <Uncontrolled />
    </div>
  );
};

export default App;

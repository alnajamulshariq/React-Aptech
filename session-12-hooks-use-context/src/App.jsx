import React, { createContext } from 'react';
import First from './First';
import './App.css';

export const MyNameContext = createContext();

function App() {
  return (
    <MyNameContext.Provider value="Shariq">
      <First />
    </MyNameContext.Provider>
  );
}

export default App;

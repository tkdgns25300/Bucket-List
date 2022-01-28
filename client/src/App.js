import './App.css';
import React from 'react';

// components
import InputBucket from './components/InputBucket/InputBucket';
import AllBucket from './components/AllBucket/AllBucket';

function App() {
  return (
    <div className='App'>
      <div className='input-bucket'>
        <InputBucket />
      </div>
      <div className='all-bucket'>
        <AllBucket />
      </div>
    </div>
  );
}

export default App;

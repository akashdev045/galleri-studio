import React from 'react';
import Header from './components/Header';
import './App.scss';
import Dashboard from './container/dashboard';

function App() {
  return (
    <div className="mainContainer">

    <div className="bgMain" />
      <div className="responsiveContainer">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

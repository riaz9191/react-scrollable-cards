import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="main-container bg-gray-100 min-h-screen px-1 py-2">
      <div className="scroll-container flex overflow-x-auto space-x-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
   
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import InCompleteCard from './Cards/InCompleteCard';

function App() {
  return (
    <div className="main-container bg-gray-100 min-h-screen px-1 py-2">
      <div className="scroll-container flex overflow-x-auto space-x-4">
        <InCompleteCard />
        
   
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import InCompleteCard from './Cards/InCompleteCard';
import TodoCards from './Cards/TodoCards';
import DoingCards from './Cards/DoingCards';
import UnderReview from './Cards/UnderReview';
import Completed from './Cards/Completed';
import OverDelay from './Cards/OverDelay';

function App() {
  
  return (
    <div className="main-container bg-gray-100 min-h-screen px-1 py-2">
      <div className="scroll-container flex overflow-x-auto space-x-4">
        <InCompleteCard />
        <TodoCards/>
        <DoingCards/>
        <UnderReview/>
        <Completed/>
        <OverDelay/>
   
      </div>
    </div>
  );
}

export default App;

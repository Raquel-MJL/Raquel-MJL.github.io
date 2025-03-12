import { useState } from 'react';
import './App.css';
import React from 'react';
import {Section} from './sections/section';
import {Hechizos} from './data/sectionData';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="webTitle text-3xl font-bold text-center mb-8">Conjuros D&D</h1>
        
        <div className="section-container">
          {Hechizos.map((sectionData) => (
            <Section 
              key={sectionData.id}
              title={sectionData.nivel}
              conjuros={sectionData.conjuros}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App

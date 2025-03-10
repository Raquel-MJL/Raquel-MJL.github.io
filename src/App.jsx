import { useState } from 'react'
import './App.css'
import React from 'react';
import {Section} from './sections/section'
import {Hechizos} from './data/sectionData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      </div>

      <div className="section-container">
        {/* Renderizado dinámico */}
        {Hechizos.map((sectionData) => (
          <Section 
          key={sectionData.id}
          title={sectionData.nivel}
        />
      ))}
      </div>
      
 

        
      </div>
      
      
     
    </>
  )
}

export default App

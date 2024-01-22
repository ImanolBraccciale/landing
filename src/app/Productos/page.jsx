"use client"
import React, { useState } from 'react';
import   "./Productos.css"
import { renderSectionContent } from '../components/Food/food';

export default function Productos() {
  const [currentSection, setCurrentSection] = useState('pizzas');

  const handleSectionClick = (section) => {
    setCurrentSection(section);
  };
  
  return (
    <section className="backgroundP">
      <div className='asd'>

      <h3 className="tittleP">Productos deliciosos de nuestro menú</h3>
     
      <nav className="navbarP">
        <ul className="navListP">
          <li className={currentSection === 'pizzas' ? "active" : ''} onClick={() => handleSectionClick('pizzas')}>
            Pizzas
          </li>
          <li className={currentSection === 'empanadas' ? "active" : ''} onClick={() => handleSectionClick('empanadas')}>
            Empanadas
          </li>
          <li className={currentSection === 'lomos' ? "active" : ''} onClick={() => handleSectionClick('lomos')}>
            Lomos
          </li>
        </ul>
      </nav>
      </div>

      {renderSectionContent(currentSection)}
 
    </section>
  );
}
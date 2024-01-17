"use client"
import React, { useState } from 'react';
import { renderSectionContent } from '../components/Food/food';

export default function Productos() {
  const [currentSection, setCurrentSection] = useState('pizzas'); // Estado para rastrear la sección actual

  return (
    <section>
      <nav>
        <ul>
          <li onClick={() => setCurrentSection('pizzas')}>Pizzas</li>
          <li onClick={() => setCurrentSection('empanadas')}>Empanadas</li>
          <li onClick={() => setCurrentSection('lomos')}>Lomos</li>
        </ul>
      </nav>
      {/* Contenido de la sección de productos */}
      {renderSectionContent(currentSection)}
    </section>
  );
}

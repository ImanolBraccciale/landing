"use client"
import React, { useState } from 'react';
 
import styles from "./Productos.module.css"
import { renderSectionContent } from '../components/Food/food';

export default function Productos() {
  const [currentSection, setCurrentSection] = useState('pizzas');

  const handleSectionClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <section className={styles.background}>
      <h3 className={styles.tittle}>Productos deliciosos de nuestro menú</h3>
     
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={currentSection === 'pizzas' ? styles.active : ''} onClick={() => handleSectionClick('pizzas')}>
            Pizzas
          </li>
          <li className={currentSection === 'empanadas' ? styles.active : ''} onClick={() => handleSectionClick('empanadas')}>
            Empanadas
          </li>
          <li className={currentSection === 'lomos' ? styles.active : ''} onClick={() => handleSectionClick('lomos')}>
            Lomos
          </li>
        </ul>
      </nav>

      {renderSectionContent(currentSection)}
 
    </section>
  );
}
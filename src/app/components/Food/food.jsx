"use client"
import React, { useState } from 'react';

import Image from 'next/image';
import Carrito from '../Carrito/page';
import { comidas } from '../Menu';
import styles from './FoodList.module.css';
import CarritoButton from '../ButtonCart/page';
import { agregarAlCarrito } from '../utils/carrito';

export function renderSectionContent(section) {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const toggleCarrito = () => {

    setMostrarCarrito(!mostrarCarrito);
  };

  const handleAgregarAlCarrito = (comida) => {
    const nuevosItems = agregarAlCarrito(carrito, comida);
    setCarrito(nuevosItems);
    setMostrarCarrito(false);
  };

  const cantidadEnCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

  const comidasSeccion = comidas[section] || [];

  return (
    <section>
      <CarritoButton toggleCarrito={toggleCarrito} cantidadEnCarrito={cantidadEnCarrito} />
      <div className={styles.foodList}>
        {comidasSeccion.map((comida, index) => (
          <div key={index} className={styles.foodItem}>
            <h3 className={styles.name}>{comida.nombre}</h3>
            <Image src={comida.imagen} alt={comida.nombre} width={230} height={150} background-size={'cover'} />
            <ul>
              {comida.ingredientes.map((ingrediente, i) => (
                <li key={i} className={styles.ingredients}>
                  {ingrediente}
                </li>
              ))}
            </ul>
            <button className="btn btn-success" onClick={() => handleAgregarAlCarrito(comida)}>Agregar</button>
          </div>
        ))}
      </div>
      {mostrarCarrito && (
        <Carrito carrito={carrito || []} toggleCarrito={toggleCarrito} />
      )}
    </section>
  )
}
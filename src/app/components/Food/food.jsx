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

      <div className={styles.foodList}>
        <CarritoButton toggleCarrito={toggleCarrito} cantidadEnCarrito={cantidadEnCarrito} />
        {comidasSeccion.map((comida, index) => (
          <div key={index} className={styles.foodItem}>
            <h3 className={styles.name}>{comida.nombre}</h3>
            <div className={styles.imagen} >
              <Image src={comida.imagen} alt={comida.nombre} layout="responsive" />
            </div>
            <ul className={styles.ingredients}>
              {comida.ingredientes.map((ingrediente, i) => (
                <li key={i}  >
                  <span>

                    {ingrediente}
                  </span>
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
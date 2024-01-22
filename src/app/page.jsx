"use client"
import Image from "next/image";
import CarouselComponent from "./components/carrousel";
 
import styles from "./components/Food/FoodList.module.css"
// Componente Home
export default function Home() {
  const comidas = {
    pizzas: [
      { nombre: 'Margarita', ingredientes: ['Tomate', 'Queso', 'Albahaca'], imagen: require('./assets/Foods/Pizzas/pizza.jpg') },
      { nombre: 'Pepperoni', ingredientes: ['Tomate', 'Queso', 'Pepperoni'], imagen: require('./assets/Foods/Pizzas/pizza.jpg') },
      { nombre: 'Pepperoni', ingredientes: ['Tomate', 'Queso', 'Pepperoni'], imagen: require('./assets/Foods/Pizzas/pizza.jpg') },
      { nombre: 'Pepperoni', ingredientes: ['Tomate', 'Queso', 'Pepperoni'], imagen: require('./assets/Foods/Pizzas/pizza.jpg') },

    ],
  }
 
  return (
    <main>
      <CarouselComponent />
      <h2 className={styles.sugerencia}>Las Cuatro Estrellas de la Parrilla</h2>
      <div className={styles.foodList}>
      {comidas.pizzas.map((comida, index) => (
        <div key={index} className={styles.foodItem}>
          <h3 className={styles.name}>{comida.nombre}</h3>
          <div className={styles.imagen } >
            <Image src={comida.imagen}   alt={comida.nombre}  layout="responsive"/>
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
        </div>
      ))}
      </div>


    </main>
  );
}

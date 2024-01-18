"use client"
import styles from "./FoodList.module.css"
import Image from "next/image";

export function renderSectionContent(section) {
    const comidas = {
        pizzas: [
          { nombre: 'Margarita', ingredientes: ['Tomate', 'Queso', 'Albahaca'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg')  },
          { nombre: 'Pepperoni', ingredientes: ['Tomate', 'Queso', 'Pepperoni'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg')  },
          // Agrega más comidas según sea necesario
        ],
        empanadas: [
          { nombre: 'Carne', ingredientes: ['Carne molida', 'Cebolla', 'Condimentos'], imagen: require('../../assets/Foods/Pizzas/pizza.jpg')  },
          { nombre: 'Pollo', ingredientes: ['Pollo desmenuzado', 'Cebolla', 'Condimentos'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg')  },
          // Agrega más comidas según sea necesario
        ],
        lomos: [
          { nombre: 'Lomo Completo', ingredientes: ['Lomo', 'Jamón', 'Queso'], imagen: require('../../assets/Foods/Pizzas/pizza.jpg')   },
          { nombre: 'Lomo con Queso', ingredientes: ['Lomo', 'Queso'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg') },
          { nombre: 'Lomo con Queso', ingredientes: ['Lomo', 'Queso'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg') },
          { nombre: 'Lomo con Queso', ingredientes: ['Lomo', 'Queso'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg') },
          { nombre: 'Lomo con Queso', ingredientes: ['Lomo', 'Queso'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg') },
          { nombre: 'Lomo con Queso', ingredientes: ['Lomo', 'Queso'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg') },
          { nombre: 'Lomo con Queso', ingredientes: ['Lomo', 'Queso'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg') },
          { nombre: 'Lomo con Queso', ingredientes: ['Lomo', 'Queso'], imagen:  require('../../assets/Foods/Pizzas/pizza.jpg') },
          // Agrega más comidas según sea necesario
        ],
      };

      const comidasSeccion = comidas[section] || [];

      return (
        <div className={styles.foodList}>
         
          {comidasSeccion.map((comida, index) => (
            <div key={index} className={styles.foodItem}>
              <h3 className={styles.name}>{comida.nombre}</h3>
              { 
                <Image src={comida.imagen} alt={comida.nombre}   width={230}
                height={150} background-size={"cover"} /> 
            
                }
              <ul >
                {comida.ingredientes.map((ingrediente, i) => (
                  <li key={i} className={styles.ingredients} >{ingrediente}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  
"use client"
export function renderSectionContent(section) {
    const comidas = {
        pizzas: [
          { nombre: 'Margarita', ingredientes: ['Tomate', 'Queso', 'Albahaca'], imagen: '/images/margarita.jpg' },
          { nombre: 'Pepperoni', ingredientes: ['Tomate', 'Queso', 'Pepperoni'], imagen: '/images/pepperoni.jpg' },
          // Agrega más comidas según sea necesario
        ],
        empanadas: [
          { nombre: 'Carne', ingredientes: ['Carne molida', 'Cebolla', 'Condimentos'], imagen: '/images/carne.jpg' },
          { nombre: 'Pollo', ingredientes: ['Pollo desmenuzado', 'Cebolla', 'Condimentos'], imagen: '/images/pollo.jpg' },
          // Agrega más comidas según sea necesario
        ],
        lomos: [
          { nombre: 'Lomo Completo', ingredientes: ['Lomo', 'Jamón', 'Queso'], imagen: '/images/lomo_completo.jpg' },
          { nombre: 'Lomo con Queso', ingredientes: ['Lomo', 'Queso'], imagen: '/images/lomo_queso.jpg' },
          // Agrega más comidas según sea necesario
        ],
      };

      const comidasSeccion = comidas[section] || [];

      return (
        <div>
         
          {comidasSeccion.map((comida, index) => (
            <div key={index}>
              <h3>{comida.nombre}</h3>
              {/* <img src={comida.imagen} alt={comida.nombre} style={{ maxWidth: '100%' }} /> */}
              <ul>
                {comida.ingredientes.map((ingrediente, i) => (
                  <li key={i}>{ingrediente}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  
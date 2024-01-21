"use client"
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { actualizarCantidad, enviarPorWhatsApp, handleClickOutside } from '../utils/carrito';

const Carrito = ({ carrito, toggleCarrito }) => {
  const [carritoActualizado, setCarrito] = useState(carrito);
  const menuWSP = {
    mensaje: `¡Hola! Quiero hacer un pedido:\n${carritoActualizado
      .map((item) => `${item.nombre} x ${item.cantidad}`)
      .join('\n')}`,
  };

  const handleEnviarPorWhatsApp = () => enviarPorWhatsApp(menuWSP);
  const handleActualizarCantidad = (item, operacion) =>
    actualizarCantidad(item, operacion, carritoActualizado, setCarrito);
  const handleOutsideClick = (e) => handleClickOutside(e, toggleCarrito);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [toggleCarrito]);

  return (
    <div id="carritoContainer" className="position-fixed top-50 start-50 translate-middle p-5 bg-light shadow-lg" style={{ zIndex: 9, borderRadius: '15px' }}>
    <button
      className="btn btn-danger position-absolute top-0 end-0 m-3 rounded-circle"
      onClick={toggleCarrito}
    >
      X
    </button>
    <h2 className="mb-4">Carrito de Compras</h2>
    <ul className="list-group mb-3">
      {carritoActualizado.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span>{item.nombre}</span>
          <div className="btn-group">
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleActualizarCantidad(item, 'restar')}
            >
              -
            </button>
            <span className="btn btn-light">{item.cantidad}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleActualizarCantidad(item, 'sumar')}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
    <button className="btn btn-success" onClick={handleEnviarPorWhatsApp}>
      Enviar por WhatsApp
    </button>
  </div>
  );
};

export default Carrito;

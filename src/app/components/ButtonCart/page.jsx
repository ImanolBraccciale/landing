// CarritoButton.js
import React from 'react';
import Image from 'next/image';

const CarritoButton = ({ toggleCarrito, cantidadEnCarrito }) => {
  return (
    <div className="position-fixed top-0 end-0 translate-middle-x m-3">
      <button
        className="btn btn-info btn-lg p-2"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
        onClick={toggleCarrito}
      >
        <Image src={require('../../assets/car.png')} alt="Carrito de Compras" className="me-2" width={30} height={30} />
        <span className="badge bg-danger">{cantidadEnCarrito}</span>
      </button>
    </div>
  );
};

export default CarritoButton;

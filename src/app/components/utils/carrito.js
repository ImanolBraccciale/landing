export const enviarPorWhatsApp = (menuWSP) => {
    const mensaje = menuWSP.mensaje;
    const enlaceWhatsApp = `https://wa.me/+5493388675439/?text=${encodeURIComponent(mensaje)}`;
    window.open(enlaceWhatsApp, '_blank');
};

export const actualizarCantidad = (item, operacion, carritoActualizado, setCarrito) => {
    const nuevoCarrito = carritoActualizado.map((producto) => {
        if (producto.nombre === item.nombre) {
            if (operacion === 'sumar') {
                return { ...producto, cantidad: producto.cantidad + 1 };
            } else if (operacion === 'restar' && producto.cantidad > 1) {
                return { ...producto, cantidad: producto.cantidad - 1 };
            }
        }
        return producto;
    });

    setCarrito(nuevoCarrito);
};

export const handleClickOutside = (e, toggleCarrito) => {
    if (!document.getElementById('carritoContainer').contains(e.target)) {
        toggleCarrito();
    }
};
// carritoUtils.js
export const agregarAlCarrito = (carritoActual, comida) => {
    const existente = carritoActual.find((item) => item.nombre === comida.nombre);
    if (existente) {
      const nuevosItems = carritoActual.map((item) =>
        item.nombre === comida.nombre ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      return nuevosItems;
    } else {
      return [...carritoActual, { ...comida, cantidad: 1 }];
    }
  };
  
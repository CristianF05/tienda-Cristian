import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Asegúrate de tener la configuración de Firebase
import { collection, getDocs } from 'firebase/firestore';
import '../estilos/Productos.css';  // Asegúrate de tener una hoja de estilo para los estilos

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const productosCollection = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCollection);
      const productosList = productosSnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }));
      setProductos(productosList);
    };

    fetchProductos();
  }, []);

  return (
    <div className="productos-container">
      <h2 className="productos-title">Productos Disponibles</h2>
      <div className="productos-grid">
        {productos.length === 0 ? (
          <p>No hay productos disponibles</p>
        ) : (
          productos.map((producto) => (
            <div className="producto-card" key={producto.id}>
              <img src={producto.imagenUrl || '/default-image.jpg'} alt={producto.nombre} className="producto-img" />
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <p className="producto-descripcion">{producto.descripcion}</p>
              <p className="producto-precio">Precio: ${producto.precio}</p>
              <button className="producto-btn">Añadir al carrito</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Productos;

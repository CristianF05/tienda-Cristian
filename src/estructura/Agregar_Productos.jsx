// src/paginas/Agregar_Productos.jsx
import React, { useState } from 'react';
import { db } from '../firebase'; // archivo se llama firebase.js
import { collection, addDoc } from 'firebase/firestore';
import '../estilos/Agregar_Productos.css';

const Agregar_Productos = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'productos'), {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        fecha: new Date(),
      });

      setMensaje('✅ Producto agregado exitosamente!');
      setProducto({
        nombre: '',
        descripcion: '',
        precio: '',
      });
      e.target.reset();

    } catch (error) {
      console.error('Error al guardar el producto:', error);
      setMensaje('❌ Error al guardar el producto. Intenta nuevamente.');
    }
  };

  return (
    <div className="agregar-container">
      <h2>Agregar nuevo producto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre del producto</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          required
        />

        <label>Descripción</label>
        <textarea
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          required
        ></textarea>

        <label>Precio</label>
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          required
        />

        <button type="submit">Guardar Producto</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};

export default Agregar_Productos;

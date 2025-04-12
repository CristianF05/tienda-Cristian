// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/menu.css';  // Importa el archivo CSS

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
        </li>
        <li>
          <Link to="/Agregar_Productos">Agregar Productos</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/registrarse">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

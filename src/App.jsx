// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './estructura/Menu'; // Importamos el componente Menu
import Inicio from './estructura/Inicio'; // Crea las páginas correspondientes
import Productos from './estructura/Productos';
import Contacto from './estructura/Contacto';
import Carrito from './estructura/Carrito';
import Login from './estructura/LoginPage'; // Página de Login
import Agregar_Productos from './estructura/Agregar_Productos'; // Página de Login
import Registrarse from './estructura/SignupPage'; // Página de Registrarse

function App() {
  return (
    <Router>
      <Menu /> {/* Menú visible en todas las páginas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/Agregar_Productos" element={<Agregar_Productos />} /> {/* Ruta para login */}
        <Route path="/login" element={<Login />} /> {/* Ruta para login */}
        <Route path="/registrarse" element={<Registrarse />} /> {/* Ruta para registro */}
      </Routes>
    </Router>
  );
}

export default App;

// src/paginas/Inicio.jsx
import React from 'react';
import '../estilos/inicio.css';  // Importa el archivo CSS

const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="banner">
        <img src="/images/banner.jpg" alt="Tienda Gamer" className="banner-img" />
        <h1>Bienvenidos a GameStore</h1>
      </div>

      <section className="seccion">
        <h2>¿Quiénes somos?</h2>
        <p>Somos una tienda apasionada por el mundo gamer. Ofrecemos productos de calidad para jugadores de todas las edades, desde consolas y accesorios hasta merchandising oficial.</p>
      </section>

      <section className="seccion">
        <h2>Misión</h2>
        <p>Brindar a nuestros clientes la mejor experiencia en compras de productos gamer, con atención personalizada y precios competitivos.</p>
      </section>

      <section className="seccion">
        <h2>Visión</h2>
        <p>Ser la tienda líder en productos para gamers en Latinoamérica, innovando constantemente y creciendo junto a nuestra comunidad.</p>
      </section>

      <section className="seccion">
        <h2>Valores</h2>
        <ul>
          <li>✔ Pasión por los videojuegos</li>
          <li>✔ Compromiso con la calidad</li>
          <li>✔ Atención al cliente personalizada</li>
          <li>✔ Innovación constante</li>
        </ul>
      </section>
    </div>
  );
};

export default Inicio;

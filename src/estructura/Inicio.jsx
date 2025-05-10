// src/paginas/Inicio.jsx
import React from 'react';
import '../estilos/inicio.css';

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

      {/* SECCIÓN DE DATOS/GRAFICO */}
      <section className="seccion">
        <h2>Datos en tiempo real</h2>
        <div style={{ width: '100%', height: '500px' }}>
          <iframe
            title="archivoicomers"
            width="100%"
            height="100%"
            src="https://app.powerbi.com/view?r=eyJrIjoiZmVkYjkxYjEtYjFhNC00NTRiLWExM2YtYzEwOWU1OGU3NzBiIiwidCI6ImI0YTQwNTQ1LTc3NzktNGIzOC1hZmY3LTFmMTczOGY4MDg0MCIsImMiOjR9"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Inicio;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <Link to="/" className="logo">
          <div className="ball" />
        </Link>
        <div className="menu">
          <span>AYUDA</span>
          <div className="hamburger">≡</div>
        </div>
        <h1>BIENVENIDO XXXXX</h1>
        <div className="profile">
          <img src="profile.jpg" alt="Profile" />
          <p>Tus puntos acumulados: XXXXXX</p>
          <p>RECUERDA HACER CAMBIOS ANTES DE XX-XX-XXXX</p>
        </div>
      </header>
      <div className="sections">
        <div className="section">
          <h2>MI EQUIPO</h2>
          {/* Aquí puedes agregar la lógica para mostrar los jugadores seleccionados */}
        </div>
        <div className="section">
          <h2>RANKING</h2>
          {/* Aquí puedes agregar la lógica para mostrar el ranking */}
        </div>
        <div className="section">
          <h2>JUGADORES</h2>
          {/* Aquí puedes agregar la lógica para mostrar los jugadores disponibles */}
        </div>
      </div>
      <p>¡Fecha límite para cambios: 20 Oct, 23:59!</p>
      <footer>
        ©Football Fantasy
      </footer>
    </div>
  );
};

export default Home;

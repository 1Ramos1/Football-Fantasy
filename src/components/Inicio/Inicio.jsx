import React from 'react';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio">
      <header className="inicio-header">
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
    </div>
  );
};

export default inicio;

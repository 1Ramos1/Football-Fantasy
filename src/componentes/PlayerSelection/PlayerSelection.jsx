import React from 'react';
import { Link } from 'react-router-dom';
import './PlayerSelection.css';

const PlayerSelection = () => {
  const players = [
    { name: 'Lionel Messi', isFavorite: true },
    { name: 'Cristiano Ronaldo', isFavorite: true },
    { name: 'Zinedine Zidane', isFavorite: false },
    { name: 'Andrés Iniesta', isFavorite: false },
    { name: 'Xavi Hernández', isFavorite: false },
    { name: 'Luka Modric', isFavorite: false },
    { name: 'Thierry Henry', isFavorite: false },
    { name: 'Robert Lewandowski', isFavorite: false },
    { name: 'Ronaldinho', isFavorite: false },
    { name: 'Gianluigi Buffon', isFavorite: false },
    { name: 'Paolo Maldini', isFavorite: false },
    { name: 'Ricardo Kaka', isFavorite: false },
    // Agrega más jugadores según sea necesario
  ];

  return (
    <div className="player-selection">
      <header className="player-selection-header">
        <Link to="/" className="logo">
          <div className="ball" />
        </Link>
        <div className="menu">
          <span>AYUDA</span>
          <div className="hamburger">≡</div>
        </div>
      </header>
      <h1>Página 4: Selección de Jugadores</h1>
      <p>Selecciona a tus 5 jugadores favoritos para tu equipo fantasy.</p>
      <div className="players">
        {players.map((player, index) => (
          <div key={index} className="player">
            <img src={`player${index}.jpg`} alt={player.name} />
            <p>{player.name}</p>
            <button>{player.isFavorite ? 'Favorito' : 'Agregar a Favoritos'}</button>
          </div>
        ))}
      </div>
      <p>0/5 jugadores seleccionados</p>
      <p>¡Fecha límite para cambios: 20 Oct, 23:59!</p>
      <button className="confirm-button">Confirmar equipo</button>
      <footer>
        ©Football Fantasy
      </footer>
    </div>
  );
};

export default PlayerSelection;

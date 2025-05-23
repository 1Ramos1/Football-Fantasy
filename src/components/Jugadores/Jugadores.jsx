import React, { useState } from 'react';
import './Jugadores.css';

const jugadores = [
  { nombre: "bufon", imagen: "bufon.jpg" },
  { nombre: "cr7", imagen: "cr7.jpg" },
  { nombre: "croz", imagen: "croz.jpg" },
  { nombre: "henry", imagen: "henry.jpg" },
  { nombre: "iniesta", imagen: "iniesta.jpg" },
  { nombre: "kaka", imagen: "kaka.jpg" },
  { nombre: "lampard", imagen: "lampard.jpg" },
  { nombre: "lewandoskli", imagen: "lewandoskli.jpg" },
  { nombre: "maldini", imagen: "maldini.jpg" },
  { nombre: "mbape", imagen: "mbape.jpg" },
  { nombre: "messi", imagen: "messi.jpg" },
  { nombre: "modric", imagen: "modric.jpg" },
  { nombre: "neymar", imagen: "neymar.jpg" },
  { nombre: "pirlo", imagen: "pirlo.jpg" },
  { nombre: "ramos", imagen: "ramos.jpg" },
  { nombre: "ronaldinho", imagen: "ronaldinho.jpg" },
  { nombre: "stiven gerard", imagen: "stiven gerard.jpg" },
  { nombre: "xavi", imagen: "xavi.jpg" },
  { nombre: "zidane", imagen: "zidane.jpg" },
];

export default function Jugadores() {
  const [seleccionados, setSeleccionados] = useState([]);

  const toggleJugador = (nombre) => {
    setSeleccionados((prev) =>
      prev.includes(nombre)
        ? prev.filter((j) => j !== nombre)
        : prev.length < 5
        ? [...prev, nombre]
        : prev
    );
  };

  return (
    <div className="jugadores-container">
      <h2>Página 4: Selección de Jugadores</h2>
      <p>Selecciona a tus 5 jugadores favoritos para tu equipo fantasy.</p>
      <div className="grid">
        {jugadores.map((j) => (
          <div
            key={j.nombre}
            className={`jugador-card ${seleccionados.includes(j.nombre) ? 'seleccionado' : ''}`}
            onClick={() => toggleJugador(j.nombre)}
          >
            <img src={`/img/${j.imagen}`} alt={j.nombre} />
            <p>{j.nombre}</p>
          </div>
        ))}
      </div>
      <p>{seleccionados.length}/5 jugadores seleccionados</p>
      <button className="confirmar-btn">Confirmar equipo</button>
    </div>
  );
}

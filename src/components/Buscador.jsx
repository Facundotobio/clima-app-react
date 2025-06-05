import React, { useState } from 'react';
import styles from '../styles/Buscador.module.css';

export default function Buscador({ modo = 'simple', onBuscar }) {
  const [ciudad, setCiudad] = useState('');
  const [ciudad2, setCiudad2] = useState('');
  const [dias, setDias] = useState(3);

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (modo === 'simple') {
      if (ciudad.trim() === '') return;
      onBuscar(ciudad.trim(), dias);
    } else if (modo === 'comparar') {
      if (ciudad.trim() === '' || ciudad2.trim() === '') return;
      onBuscar(ciudad.trim(), ciudad2.trim(), dias);
    }
  };

  return (
    <form onSubmit={manejarSubmit} className={styles.form}>
      <div className={styles.inputsContainer}>
        <input
          type="text"
          placeholder="Ingrese el destino"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          className={styles.input}
          required
        />
        {modo === 'comparar' && (
          <input
            type="text"
            placeholder="Ingrese el 2do destino"
            value={ciudad2}
            onChange={(e) => setCiudad2(e.target.value)}
            className={styles.input}
            required
          />
        )}
        <select
          value={dias}
          onChange={(e) => setDias(Number(e.target.value))}
          className={styles.select}
        >
          {Array.from({ length: 14 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'día' : 'días'}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className={styles.button}>
        {modo === 'simple' ? 'Consultar clima' : 'Comparar Clima'}
      </button>
    </form>
  );
}

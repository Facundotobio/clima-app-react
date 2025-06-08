import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';
import ResultadoClima from './ResultadoClima';
import ResultadoComparacion from './ResultadoComparacion';
import styles from '../styles/BuscadorClima.module.css';
import { MdErrorOutline } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

const BASE_URL = import.meta.env.VITE_BACK_API_BASE_URL;

export default function BuscadorClima() {
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');
  const [modo, setModo] = useState('simple');

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const buscarClima = async (ciudad, dias) => {
    setError('');
    setResultado(null);
    try {
      const res = await fetch(`${BASE_URL}/clima?ciudad=${ciudad}&dias=${dias}`);
      if (!res.ok) {
        const mensajeError = await res.text();
        throw new Error(mensajeError);
      }
      const data = await res.json();
      setResultado({ tipo: 'simple', data });
    } catch (err) {
      setError(err.message);
    }
  };

  const compararClima = async (ciudad1, ciudad2, dias) => {
    setError('');
    setResultado(null);
    try {
      const res = await fetch(`${BASE_URL}/clima/comparar?ciudad1=${ciudad1}&ciudad2=${ciudad2}&dias=${dias}`);
      if (!res.ok) {
        const mensajeError = await res.text(); // Leemos el mensaje de error como texto
        throw new Error(mensajeError);         // Lo lanzamos como excepción
      }
      const data = await res.json();
      setResultado({ tipo: 'comparacion', data });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleBuscar = (ciudad, ciudad2OrDias, diasOrUndefined) => {
    if (modo === 'simple') {
      buscarClima(ciudad, ciudad2OrDias);
    } else {
      compararClima(ciudad, ciudad2OrDias, diasOrUndefined);
    }
  };

  return (
    <div className={styles.contenedor} data-cy="contenedor-principal">
      <h1 className={styles.titulo} data-cy="titulo">Consulta y compara el clima</h1>

      <div className={styles.modoContenedor} data-cy="modoContenedor">
        <button
          className={`${styles.botonModo} ${modo !== 'simple' ? styles.inactivo : ''}`}
          onClick={() => setModo('simple')}
          data-cy="boton-busqueda"
        >
          Búsqueda
        </button>
        <button
          className={`${styles.botonModo} ${modo !== 'comparar' ? styles.inactivo : ''}`}
          onClick={() => setModo('comparar')}
          data-cy="boton-comparar"
        >
          Comparar clima
        </button>
      </div>

      <Buscador modo={modo} onBuscar={handleBuscar} />

      {error && (
        <div className={styles.error} data-cy="error">
          <MdErrorOutline className={styles.iconoError} />
          <span>{error}</span>
          <button className={styles.cerrarError} onClick={() => setError('')} data-cy="cerrar-error">
            <IoClose />
          </button>
        </div>
      )}

      {resultado?.tipo === 'simple' && <ResultadoClima pronostico={resultado.data} data-cy="resultado-clima" />}
      {resultado?.tipo === 'comparacion' && <ResultadoComparacion comparacion={resultado.data} data-cy="resultado-comparacion" />}
    </div>
  );
}

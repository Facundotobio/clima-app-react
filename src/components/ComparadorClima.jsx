import React, { useState , useEffect} from 'react';
import Buscador from './Buscador';
import ResultadoComparacion from './ResultadoComparacion';
import styles from '../styles/BuscadorClima.module.css';
import { MdErrorOutline } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';


export default function ComparadorClima() {
  const [datosComparacion, setDatosComparacion] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const manejarComparacion = async (ciudad1, ciudad2, dias) => {
    setError('');
    setDatosComparacion(null);

    if (!ciudad1 || !ciudad2) {
      setError('Debe ingresar ambas ciudades para comparar');
      return;
    }
    if (dias < 1 || dias > 14) {
      setError('El rango de días debe estar entre 1 y 14');
      return;
    }

    try {
      const url = `${import.meta.env.VITE_BACK_API_BASE_URL}/api/clima/comparar?ciudad1=${encodeURIComponent(ciudad1)}&ciudad2=${encodeURIComponent(ciudad2)}&dias=${dias}`;
      const response = await fetch(url);
      if (!response.ok) {
        const mensajeError = await res.text();
        throw new Error(mensajeError);
      }
      
      const data = await response.json();
      setDatosComparacion(data);
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div>
      <Buscador
        modo="comparar"
        onBuscar={manejarComparacion}
      />
      {error && (
  <div className={styles.error}>
    <MdErrorOutline className={styles.iconoError} />
    <span>{error}</span>
    <button className={styles.cerrarError} onClick={() => setError('')}>
      <IoClose />
    </button>
  </div>
)}

      <ResultadoComparacion comparacion={datosComparacion} />
    </div>
  );
}

import React from 'react';
import styles from '../styles/ResultadoComparacion.module.css';

export default function ResultadoComparacion({ comparacion }) {
  if (!comparacion) return null;

  const { ciudad1, ciudad2 } = comparacion;

  return (
    <div className={styles.resultadoComparacion} data-cy="resultado-comparacion">
      <h2>Comparación entre {ciudad1.localizacion.nombre} y {ciudad2.localizacion.nombre}</h2>
      <div className={styles.comparacionContainer} data-cy="comparacionContainer">
        {[ciudad1, ciudad2].map((ciudad, idx) => (
          <div key={idx} className={styles.ciudad} data-cy="ciudad-comparada">
            <h3>{ciudad.localizacion.nombre}, {ciudad.localizacion.pais}</h3>
            <p>Hora local: {ciudad.localizacion.horaLocal}</p>
            <div className={styles.diasContainer} data-cy="diasContainer">
              {ciudad.pronostico.pronosticoDias.map((dia) => (
                <div key={dia.fecha} className={styles.dia} data-cy="dia">
                  <h4>{dia.fecha}</h4>
                  <p>{dia.dia.condicion.descripcion}</p>
                  <img
                    src={`https:${dia.dia.condicion.icono}`}
                    alt={dia.dia.condicion.descripcion}
                  />
                  <p>Max: {dia.dia.tempMaxC}°C / Min: {dia.dia.tempMinC}°C</p>
                  <p>Humedad: {dia.dia.humedad}%</p>
                  <p>Precipitación: {dia.dia.precipitacion} mm</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

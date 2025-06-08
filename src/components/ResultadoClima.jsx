import React from 'react';
import styles from '../styles/ResultadoClima.module.css';

export default function ResultadoClima({ pronostico }) {
  if (!pronostico) return null;

  const { localizacion, pronostico: forecast } = pronostico;
  const dias = forecast?.pronosticoDias || [];

  return (
    <div className={styles.resultadoClima} data-cy="resultado-clima">
      <h2>Pronóstico para {localizacion.nombre}, {localizacion.pais}</h2>
      <p>Hora local: {localizacion.horaLocal}</p>

      <div className={styles.diasContainer} data-cy="diasContainer">
        {dias.map((dia) => (
          <div key={dia.fecha} className={styles.dia} data-cy="dia">
            <h3>{dia.fecha}</h3>
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
  );
}

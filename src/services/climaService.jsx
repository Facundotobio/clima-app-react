const BASE_URL = import.meta.env.VITE_BACK_API_BASE_URL;

export async function obtenerPronostico(ciudad, dias) {
  const response = await fetch(`${API_URL}?ciudad=${ciudad}&dias=${dias}`);
  if (!response.ok) throw new Error('Error al obtener el pronóstico');
  return await response.json();
}

export async function compararCiudades(ciudad1, ciudad2, dias) {
  const response = await fetch(
    `${API_URL}/comparar?ciudad1=${ciudad1}&ciudad2=${ciudad2}&dias=${dias}`
  );
  if (!response.ok) throw new Error('Error al comparar ciudades');
  return await response.json();
}

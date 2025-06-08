# 🌤️ Clima App - Pronóstico y Comparación de Clima

Aplicación web que permite consultar el clima actual y pronóstico extendido de 1 a 14 días de una ciudad en específico, así como comparar el clima entre dos ubicaciones para distintos días. Ofrece una interfaz clara, amigable y con validaciones que mejoran la experiencia de usuario.

🔗 **Versión en línea:**  
https://clima-app-react-ten.vercel.app/

---

## 📌 Objetivo del Proyecto

Brindar una herramienta práctica para consultar y comparar condiciones climáticas, útil para viajeros, planificadores de actividades al aire libre y cualquier persona interesada en conocer el pronóstico del clima en distintas ciudades del mundo.

---

## 🚀 Tecnologías Utilizadas

### 🧠 Backend (API REST)
- **.NET 8**
- **ASP.NET Core Web API**
- **C#**
- **HttpClient** para consumo de APIs externas
- **Newtonsoft.Json** para deserialización
- Arquitectura separada por capas (Controller, Service, Client)

### 🌐 Frontend
- **React 18**
- **Vite** como bundler
- **JavaScript (ES6+)**
- **CSS Modules** para estilos scoped
- **React Icons** (`react-icons/md`, `react-icons/io5`) para íconos visuales
- **Fetch API** para llamadas HTTP al backend
- **.env** para configuración de variables de entorno (`VITE_BACK_API_BASE_URL`)

---

## 📦 Funcionalidades

- 🔍 Consultar el clima actual y el pronóstico para cualquier ciudad de 1 a 14 días.
- 🌐 Comparar el clima entre dos ciudades distintas para el mismo rango de días.
- 🚫 Validaciones de entrada para evitar consultas inválidas o duplicadas.
- ✅ Mensajes de error claros tanto del frontend como del backend.
- 📋 Footer persistente con datos del autor.

---

## 🧪 Pruebas automatizadas (Cypress)

La aplicación cuenta con pruebas end-to-end (E2E) automatizadas usando [Cypress](https://www.cypress.io/), ubicadas en la carpeta `cypress/e2e/`.

### 🎯 Objetivos de las pruebas
- Validar funcionalidades exitosas: búsqueda y comparación de clima.
- Validar flujos con errores y validaciones.
- Verificar renderizado de componentes importantes (título, botones, selectores, etc.).
- Validar comportamiento de la UI frente a inputs inválidos y vacíos.
- Probar el comportamiento responsivo en dispositivos móviles.

### 📋 Escenarios cubiertos

#### ✅ Casos exitosos
- **Búsqueda simple exitosa:** Ingresar "Buenos Aires", seleccionar 7 días, buscar y verificar datos del clima.
- **Comparación exitosa:** Ingresar "Buenos Aires" y "Córdoba", seleccionar modo comparación y verificar datos de ambas ciudades.
- **Renderizado de elementos clave:** Se verifica la presencia de `.titulo`, `.form`, `.select`, `.modoContenedor`, `.button`.
- **Renderizado de Footer:** Se valida que el Footer se muestre correctamente con el texto de copyright y autor.
- **Cambio de modo de consulta:** Se valida que el cambio de modo oculta o muestra campos correctamente.

#### ❌ Casos con errores y validaciones
- **Ciudad inválida:** Ingresar texto inválido (ej: "W") y esperar mensaje de error específico: "Los datos ingresados son inválidos.".
- **Comparación con un solo campo:** Solo llenar una ciudad en modo comparación y esperar validación.
- **Formulario vacío:** Clickear buscar sin completar nada y esperar validaciones obligatorias.
- **Ciudades duplicadas:** Ingresar "Salta" y "Salta" y mostrar advertencia.
- **Números o símbolos:** Ingresar "123" o "@@@" y validar error o bloqueo.

#### 📱 Pruebas responsivas
- Simular viewport móvil (< 450px) y validar:
  - `.form` se ajusta a `max-width: 500px`.
  - Inputs y select se apilan verticalmente.
  - El botón `.button` siempre es visible y accesible.
  - Padding vertical aumentado.

#### 🧪 Comportamiento esperado
- En resultados exitosos: datos del clima en pantalla.
- En fallos: componente `.error` con mensaje explicativo.
- En responsivo: layout cambia correctamente y mantiene funcionalidad.

### 📂 Estructura de archivos de prueba

- `busqueda_exitosa.cy.js`: Pruebas de búsqueda simple exitosa y renderizado de elementos clave y Footer.
- `comparacion_invalida.cy.js`: Pruebas de comparación con errores y validaciones.
- `validaciones.cy.js`: Pruebas de validaciones, errores generales y mensajes de error específicos.

### ▶️ Cómo ejecutar las pruebas

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Ejecutar Cypress:
   ```bash
   npx cypress open
   ```
3. Seleccionar el archivo de prueba y correrlo en el navegador.

### 🤖 Integración continua (CI) con GitHub Actions

El proyecto cuenta con un workflow de **GitHub Actions** que ejecuta automáticamente todas las pruebas Cypress en cada push o pull request a la rama `main`.

- El workflow se encuentra en `.github/workflows/cypress.yml`.
- Las pruebas se corren contra la versión deployada en Vercel (`https://clima-app-react-ten.vercel.app/`).
- Si alguna prueba falla, el build será marcado como fallido y podrás revisar los logs en la pestaña "Actions" de tu repositorio.
- Esto asegura que cualquier cambio que rompa la funcionalidad será detectado antes de hacer merge, manteniendo la calidad del proyecto.

---

👨‍💻 Autor y redes de contacto

Facundo Tobio
📅 2025
🛡️ Todos los derechos reservados ©

https://facundo-tobio-portfolio.vercel.app/

https://www.linkedin.com/in/facundo-tobio/

https://github.com/Facundotobio
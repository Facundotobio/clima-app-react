import React from 'react';
import BuscadorClima from './components/BuscadorClima';
import Footer from './components/Footer';
import './App.css'; // Agregaremos estilos acá

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <BuscadorClima />
      </main>
      <Footer />
    </div>
  );
}

export default App;

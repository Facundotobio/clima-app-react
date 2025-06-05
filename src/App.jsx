import React from 'react';
import BuscadorClima from './components/BuscadorClima';
import Footer from './components/Footer';
import './App.css';


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

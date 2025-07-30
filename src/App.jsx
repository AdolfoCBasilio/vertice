import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>VÉRTICE</h1>
          <p className="subtitle">Soluciones creativas, visuales y publicitarias que elevan tu marca.</p>
          <a href="#contacto" className="btn-primary">Contáctanos</a>
        </div>
      </header>

      <section className="section dark-bg">
        <h2 className="section-title">Servicios</h2>
        <div className="grid-cards">
          <div className="card">
            <img src="/public/anunciopublicidad.jpeg" alt="Diseño gráfico" className="card-icon" />
            <h3>Diseño Gráfico</h3>
            <p>Branding, identidad visual, diseño editorial y contenido digital.</p>
          </div>
          <div className="card">
            <img src="/public/anunciopublicidad.jpeg"alt="Impresión" className="card-icon" />
            <h3>Impresión</h3>
            <p>Lonas, viniles, etiquetas, promocionales y más.</p>
          </div>
          <div className="card">
            <img src="/public/anunciopublicidad.jpeg" alt="Rotulación" className="card-icon" />
            <h3>Rotulación</h3>
            <p>Vehicular, fachadas, señalética y estructuras metálicas.</p>
          </div>
        </div>
      </section>

      <section className="section light-bg">
        <h2 className="section-title">Propuesta de Valor</h2>
        <p className="center-text">
          Conectamos tu marca con el público mediante creatividad, tecnología y visión empresarial. Nuestro enfoque combina diseño moderno con estrategias de alto impacto.
        </p>
      </section>

      <section className="section dark-bg">
        <h2 className="section-title">Portafolio</h2>
        <div className="grid-gallery">
          <img className="gallery-item" src="/public/anunciopublicidad.jpeg" alt="Ejemplo 2" />
          <img className="gallery-item" src="/public/logos.jpeg" alt="Ejemplo 1" />
          <img className="gallery-item" src="/public/labb.jpeg" alt="Ejemplo 3" />
        </div>
      </section>

      <section id="contacto" className="section light-bg">
        <h2 className="section-title">Contáctanos</h2>
        <form className="form">
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea rows="5" placeholder="¿Cómo podemos ayudarte?"></textarea>
          <button type="submit" className="btn-primary">Enviar</button>
        </form>
      </section>

      <a
        href="https://wa.me/2321749491"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

      <footer className="footer">
        <p>© 2025 VÉRTICE | Agencia de Servicios Publicitarios</p>
      </footer>
    </>
  )
}

export default App

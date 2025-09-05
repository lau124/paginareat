import React from 'react'
import './homePageStyless.css';

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">Glow</div>
          <ul className="navbar-links">
            <li><a href="/">Productos</a></li>
            <li><a href="/">Rutinas</a></li>
            <li><a href="/">Consejos</a></li>
            <li><a href="/">Contacto</a></li>
          </ul>
        </div>

        <div className="navbar-right">
          <a href="/" className="btn-solid">Iniciar sesión</a>
          <a href="/" className="btn-solid">Registrarse</a>
        </div>
      </nav>

      {/* Hero / Main section */}
      <div className="homepage">
        <div className="homepage-left">
          <h1 className="homepage-title">
            <span>Tu Belleza,</span><br />
            <span>Tu Ritual</span><br />
            <span>diario</span>
          </h1>
          <p className="homepage-description">
            Descubre nuestros productos de cuidado personal diseñados para iluminar tu piel, nutrir tu alma y celebrar tu belleza natural. Fórmulas limpias, resultados visibles.
          </p>
          <div className="homepage-buttons">
            <button className="btn btn-primary">Explorar productos</button>
            <button className="btn btn-secondary">Contáctanos</button>
          </div>
        </div>

        <div className="homepage-right">
          <div className="card">
            <h3>Suscripción Belleza<br /><small>€12 / mes</small></h3>
            <button className="apple-pay"> Pay</button>
            <p className="or-text">O paga con tarjeta</p>

            <form>
              <input type="email" placeholder="Correo electrónico" />
              <input type="text" placeholder="Número de tarjeta" />
              <div className="input-row">
                <input type="text" placeholder="MM / AA" />
                <input type="text" placeholder="CVC" />
              </div>
              <input type="text" placeholder="País o región" />
              <input type="text" placeholder="Código postal" />
              <button type="submit" className="pay-btn">Suscribirse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

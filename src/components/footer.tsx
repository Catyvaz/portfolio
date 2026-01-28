import "../styles/footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Email: catybusvaz2@gmail.com</p>
            <p>Ubicación: Córdoba, Argentina</p>
          </div>

          <div className="footer-section">
            <h3>Perfil</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.linkedin.com/in/catherine-bustos-vazquez-82479b232" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Catyvaz" aria-label="GitHub">
                  GitHub
                </a>
              </li>
              <li>
                <a href="Catherine Bustos Vazquez - Desarrolladora de Software.pdf" aria-label="Curricullum">
                  Curriculum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Catherine Bustos Vazquez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

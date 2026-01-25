import { useState } from "react";
import "../styles/navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="contenedor-elementos">
        <div className="nombre-completo">
          <a
            href="/"
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            Caty
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        <div className={`elementos-lista ${isOpen ? "open" : ""}`}>
          <ul className="barra-opciones">
                <li>
                  <a href="#inicio" className="nav-element text-secondary">
                    {" "}
                    Inicio{" "}
                  </a>
                </li>
                <li>
                  <a href="#sobreMi" className="nav-element text-secondary">
                    {" "}
                    Sobre mí{" "}
                  </a>
                </li>
                <li>
                  <a href="#tecnologias" className="nav-element text-secondary">
                    {" "}
                    Tecnologías{" "}
                  </a>
                </li>
                <li>
                  <a href="#proyectos" className="nav-element text-secondary">
                    {" "}
                    Proyectos{" "}
                  </a>
                </li>
                <li>
                  <a href="#educacion" className="nav-element text-secondary">
                    {" "}
                    Educación{" "}
                  </a>
                </li>
              </ul>
        </div>
      </div>
    </div>
  );
};

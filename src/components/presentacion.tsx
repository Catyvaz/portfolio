import "../styles/presentacion.css";
import { BotonesDatos } from "./botonesDatos";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FmdGoodTwoToneIcon from "@mui/icons-material/FmdGoodTwoTone";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";

export const Presentacion = () => {
  const handleClick = (enlace: string) => {
    if (enlace.startsWith("mailto:")) {
      const email = enlace.replace("mailto:", "");
      navigator.clipboard.writeText(email).then(() => {
        toast.success(
          "Correo copiado al portapapeles y redirigiendo: " + email,
          {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          },
        );
      });
      window.open(enlace, "");
    } else {
      window.open(enlace, "_blank");
    }
  };

  return (
    <section id="inicio" className="contenedor-presentacion">
      <div className="contenedor-card">
        <div className="presentacion-nombre">
          <h1>Catherine Bustos Vazquez</h1>
        </div>
        <div className="presentacion-titulos contenedor-carrusel">
          <span>FULLSTACK DEVELOPER</span>
          <span>QA TESTER</span>
        </div>

        <div className="ubicacion-tecnologias">
          <div className="items-card">
            <FmdGoodTwoToneIcon style={{ color: "#9D8EE5" }}  />
            <span className="span-card">Córdoba, Argentina / Remote</span>
          </div>
          <div className="items-card">
            <CodeTwoToneIcon style={{ color: "#9D8EE5" }} />
            <span className="span-card">React, Nest.js, TypeScript</span>
          </div>
        </div>

        <div className="presentacion-contactos">
          <BotonesDatos
            icono={EmailTwoToneIcon}
            enlace="mailto:catybusvaz2@gmail.com"
            texto="Email"
            onClick={() => handleClick("mailto:catybusvaz2@gmail.com")}
          />
          <BotonesDatos
            icono={ContactPageIcon}
            enlace="Catherine Bustos Vazquez - Desarrolladora de Software.pdf"
            descripcion="Curriculum Catherine Bustos Vazquez"
          />
          <BotonesDatos
            icono={GitHubIcon}
            enlace="https://github.com/Catyvaz"
            descripcion="GitHub Catyvaz"
          />
          <BotonesDatos
            icono={LinkedInIcon}
            enlace="https://www.linkedin.com/in/catherine-bustos-vazquez-82479b232"
            descripcion="LinkedIn Catherine Bustos Vázquez"
          />
        </div>

        <div className="presentacion-foto">
          <img
            src="/imagenPortada.jpg"
            alt="Foto de perfil"
            className="imagenPerfil"
          />
        </div>
      </div>
    </section>
  );
};

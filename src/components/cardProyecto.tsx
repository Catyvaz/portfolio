import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import type { ProyectoProps } from "../const/listaProyectos";
import "../styles/proyectos.css";

interface CardProyectoProps {
  proyecto: ProyectoProps;
  abrirModal: (proyecto: ProyectoProps) => void;
  setSeleccionado: ProyectoProps | null;
}

export const CardProyecto = ({ proyecto, abrirModal }: CardProyectoProps) => {

  const getEstadoClass = (estado?: string) => {
    return estado === "En curso" ? "estado-en-curso" : "estado-finalizado";
  };

  return (
    <div
      className="tarjeta-proyecto"
      onClick={() => abrirModal(proyecto)}
    >
      <div className="imagen-proyecto-container">
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="imagen-proyecto"
        />
      </div>
      
      <div className="contenido-proyecto">
        <div className="header-proyecto">
          <h3 className="titulo-proyecto">{proyecto.titulo}</h3>
          {proyecto.estado && (
            <span className={`estado-badge ${getEstadoClass(proyecto.estado)}`}>
              {proyecto.estado}
            </span>
          )}
        </div>

        <p className="descripcion-proyecto">
          {proyecto.descripcionCorta}
        </p>

        <div className="tags-container">
          {proyecto.tecnologias.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="footer-proyecto">
          <PlayArrowIcon fontSize="small" />
          <span>Ver detalles y video</span>
        </div>
      </div>
    </div>
  );
};

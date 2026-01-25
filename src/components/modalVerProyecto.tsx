import { Modal } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import type { ProyectoProps } from "../const/listaProyectos";

interface ModalVerProyectoProps {
  modalOpen: boolean;
  cerrarModal: () => void;
  proyectoSeleccionado: ProyectoProps | null;
}

export const ModalVerProyecto = (props: ModalVerProyectoProps) => {
  const { modalOpen, cerrarModal, proyectoSeleccionado } = props;

  return (
    <Modal
      open={modalOpen}
      onClose={cerrarModal}
      aria-labelledby="modal-titulo"
      aria-describedby="modal-descripcion"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
      }}
    >
      <>
        {proyectoSeleccionado ? (
          <div className="modal-content">
            <div className="modal-header">
              <h2 id="modal-titulo" className="modal-title">
                {proyectoSeleccionado.titulo}
              </h2>
            </div>

            <div className="modal-body">
              <div className="modal-desc-contenedor">
                <p id="modal-descripcion" className="modal-description">
                  {proyectoSeleccionado.descripcionCompleta}
                </p>
              </div>

              <div className="modal-media-container">
                {proyectoSeleccionado.video.includes("youtube.com") ? (
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ minHeight: "350px", border: "none" }}
                    src={proyectoSeleccionado.video}
                    title="Video del proyecto"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    width="100%"
                    height="100%"
                    style={{ minHeight: "350px" }}
                    controls
                  >
                    <source src={proyectoSeleccionado.video} type="video/mp4" />
                    Tu navegador no soporta el elemento video.
                  </video>
                )}
              </div>

              <div className="modal-tech-section">
                <h3 className="modal-section-title">Tecnologías utilizadas:</h3>
                <div className="modal-tech-list">
                  {proyectoSeleccionado.tecnologias.map((tech, index) => (
                    <span key={index} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <div className="modal-buttons-group">
                {proyectoSeleccionado.githubUrl && (
                  <a
                    href={proyectoSeleccionado.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modal btn-secondary"
                  >
                    <GitHubIcon fontSize="small" /> Ver código
                  </a>
                )}
                {proyectoSeleccionado.demoUrl && (
                  <a
                    href={proyectoSeleccionado.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modal btn-primary"
                  >
                    <LaunchIcon fontSize="small" /> Ver demo
                  </a>
                )}
              </div>

              <button onClick={cerrarModal} className="btn-modal btn-ghost">
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: "none" }}></div>
        )}
      </>
    </Modal>
  );
};

import { useState } from "react";
import { ModalVerProyecto } from "./modalVerProyecto";
import { proyectos, type ProyectoProps } from "../const/listaProyectos";
import { CardProyecto } from "./cardProyecto";
import "../styles/proyectos.css";

export const Proyectos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState<ProyectoProps | null>(null);
  const lista = proyectos || [];

  const abrirModal = (proyecto: ProyectoProps) => {
    setProyectoSeleccionado(proyecto);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setProyectoSeleccionado(null);
  };

  return (
    <section id="proyectos" className="contenedor-proyectos">
      <h2>Mis Proyectos</h2>

      <div className="grid-proyectos">
        {lista.map((proyecto) => (
          <CardProyecto
            key={proyecto.id}
            proyecto={proyecto}
            abrirModal={abrirModal}
            setSeleccionado={proyectoSeleccionado}
          />
        ))}
      </div>

      <ModalVerProyecto
        modalOpen={modalOpen}
        cerrarModal={cerrarModal}
        proyectoSeleccionado={proyectoSeleccionado}
      />
    </section>
  );
};

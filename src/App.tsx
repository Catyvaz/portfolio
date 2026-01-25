import { Navbar } from "./components/navbar";
import { Presentacion } from "./components/presentacion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SobreMi } from "./components/sobreMi";
import { Tecnologias } from "./components/tecnologias";
import { Proyectos } from "./components/proyectos";
import { Educacion } from "./components/educacion";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="contenedor-contenido">
        <Presentacion />
        < SobreMi/>
        <Tecnologias />
        <Proyectos/>
        <Educacion/>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

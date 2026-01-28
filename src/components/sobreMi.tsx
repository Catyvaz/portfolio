import "../styles/sobreMi.css";
import FmdGoodTwoToneIcon from "@mui/icons-material/FmdGoodTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import HandshakeTwoToneIcon from "@mui/icons-material/HandshakeTwoTone";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import AutoGraphTwoToneIcon from "@mui/icons-material/AutoGraphTwoTone";

export const SobreMi = () => {
  return (
    <section id="sobreMi" className="contenedor-sobre-mi">
      <h2 className="titulo-seccion">Sobre mí</h2>

      <div className="contenedor-bento">
        <div className="seccion-bento sobre-mi">
          <h5 className="titulo-bento">¡Hola, soy Caty!</h5>
          <p>
            Técnica en Desarrollo de Software, enfocada en crear sistemas
            claros, escalables y orientados a resolver problemas reales.
          </p>
        </div>

        <div className="seccion-bento extra-sobre-mi">
          <ul>
            <li>
              <FmdGoodTwoToneIcon className="icono-detalle" />
              <div>
                <span className="detalle-titulo">Ubicación</span>
                <p>Córdoba, Argentina (Remoto / Presencial)</p>
              </div>
            </li>
            <li>
              <LanguageTwoToneIcon className="icono-detalle" />
              <div>
                <span className="detalle-titulo">Idiomas</span>
                <p>Español Nativo | Inglés C1</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="seccion-bento stack">
          <div className="bento-header">
            <CodeTwoToneIcon />
            <h5 className="titulo-bento">Stack</h5>
          </div>
          <ul className="lista-stack">
            <li>Typescript</li>
            <li>React</li>
            <li>NestJS</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="seccion-bento rol-objetivo">
          <div className="bento-header">
            <WorkTwoToneIcon />
            <h5 className="titulo-bento">Objetivos</h5>
          </div>
          <ul className="lista-objetivos">
            <li>
              <span className="resaltado">Actualmente:</span> Fullstack
              Developer
            </li>
            <li>
              <span className="resaltado">Busco:</span> Primera experiencia
              profesional en IT
            </li>
            <li>
              <span className="resaltado">Interés:</span> Aprender en equipo y
              aportar valor en proyectos real
            </li>
          </ul>
        </div>

         <div className="seccion-bento aporte">
          <div className="bento-header">
            <AutoGraphTwoToneIcon />
            <h5 className="titulo-bento">Aporte</h5>
          </div>
          <div className="contenido-texto">
            <p>Compromiso con la <b>calidad del código</b></p>
            <p><b>Organización y atención</b> al detalle.</p>
            <p>Ganas de aprender y crecer dentro de un equipo.</p>
          </div>
        </div>

        
        <div className="seccion-bento soft-skills">
          <div className="bento-header">
            <HandshakeTwoToneIcon />
            <h5 className="titulo-bento">Soft Skills</h5>
          </div>
          <div className="contenido-texto">
            <ul>
              <li>
                Me gusta <b>analizar</b> y <b>comprender</b> las problemáticas antes de
                proponer soluciones.
              </li>
              <li>
                <b>Adaptable</b>, con buena predisposición para el trabajo en equipo.
              </li>
              <li>
                Disfruto aprender, investigar y aplicar nuevos conocimientos en
                mis proyectos.
              </li>
            </ul>
          </div>
        </div>

        <div className="seccion-bento aprendizaje">
          <div className="bento-header">
            <EmojiObjectsTwoToneIcon />
            <h5 className="titulo-bento">Aprendizaje</h5>
          </div>
          <div className="contenido-texto">
            <p>Proyectos reales (Learning by doing) y problemas concretos.</p>
            <p>Investigación e iteración constante.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

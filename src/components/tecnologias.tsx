import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/tecnologias.css";

// Puedes reemplazar estas URLs por las de tus imágenes
const tecnologias = {
  Frontend: [
    { img: "/imagenesCarrusel/html-5.png", nombre: "HTML" },
    { img: "/imagenesCarrusel/css-3.png", nombre: "CSS" },
    {
      img: "/imagenesCarrusel/icons8-javascript-144.png",
      nombre: "JAVASCRIPT",
    },
    { img: "/imagenesCarrusel/typescript.png", nombre: "TYPESCRIPT" },
    { img: "/imagenesCarrusel/icons8-reaccionar-160.png", nombre: "REACT" },
  ],
  Backend: [
    { img: "/imagenesCarrusel/icons8-nodejs-144.png", nombre: "NODEJS" },
    { img: "/imagenesCarrusel/icons8-transportado-144.png", nombre: "NESTJS" },
    { img: "/imagenesCarrusel/pythoned.png", nombre: "PYTHON" },
    { img: "/imagenesCarrusel/mysql.png", nombre: "MYSQL" },
    { img: "/imagenesCarrusel/icons8-mongodb-96.png", nombre: "MONGODB" },
  ],
  Herramientas: [
    { img: "/imagenesCarrusel/git.png", nombre: "GIT" },
    { img: "/imagenesCarrusel/icons8-github-192.png", nombre: "GITHUB" },
    { img: "/imagenesCarrusel/docker-mark-blue.png", nombre: "DOCKER" },
    { img: "/imagenesCarrusel/postman.png", nombre: "POSTMAN" },
    { img: "/imagenesCarrusel/figma.png", nombre: "FIGMA" },
    { img: "/imagenesCarrusel/vs-code.png", nombre: "VISUAL STUDIO CODE" },
  ],
};

export const Tecnologias = () => {
  return (
    <section id="tecnologias" className="contenedor-tecnologias">
      <h2 className="titulo-seccion">Tecnologías</h2>
      <div className="contenido-tecnologias">
        {Object.entries(tecnologias).map(([categoria, items]) => (
          <div key={categoria} className="categoria-container">
            <h3 className="subtitulo-categoria">{categoria}</h3>
            <div className="contenedor-div-tecnologias">
              {items.map((img, idx) => (
                <div key={idx} className="contenedor-imagen-tecnologia">
                  <img
                    src={img.img}
                    alt={`Imagen ${img.nombre}`}
                    className="imagen-tecnologia"
                  />
                  <p className="texto-tecnologia">{img.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

interface EducacionItem {
  titulo: string;
  institucion: string;
  periodo: string;
  tipo: "carrera" | "curso" | "idioma";
  descripcion?: string[];
}

export const educacionData: EducacionItem[] = [
  {
    titulo: "Tecnicatura en Desarrollo de Software",
    institucion: "Instituto A. U. Illia",
    periodo: "2023 – 2025",
    tipo: "carrera",
    descripcion: [
      "Desarrollo de software",
      "Programación",
      "Python",
      "React",
      "Typescript",
      "Javascript",
      "CSS",
      "HTML",
      "NestJS",
      "Node.Js",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    titulo: "Quality Control Automation",
    institucion: "Egg",
    periodo: "Agosto 2024 – Mayo 2025",
    tipo: "curso",
    descripcion: [
      "JMeter",
      "Appium",
      "Selenium",
      "Cypress",
      "Testing Manual",
      "Testing Automatizado",
      "Java",
      "Maven",
      "Testing de API",
      "Mobile Testing",
    ],
  },
  {
    titulo: "QA Manager",
    institucion: "Testing de Software – UTN",
    periodo: "2022",
    tipo: "curso",
    descripcion: [
      "Testing Manual",
      "Drive",
      "Verificación y Validación",
      "Plan de Pruebas",
      "Casos de prueba",
    ],
  },
  {
    titulo: "Diseño Web Responsive (HTML5/CSS3)",
    institucion: "BA Multiplica / UTN",
    periodo: "2022",
    tipo: "curso",
    descripcion: ["HTML", "CSS", "Diseño Web"],
  },
  {
    titulo: "Lengua Inglesa",
    institucion: "Instituto Walt Whitman",
    periodo: "2008 – 2018",
    tipo: "idioma",
    descripcion: ["Inglés", "Idioma"],
  },
];

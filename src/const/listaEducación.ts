interface EducacionItem {
  titulo: string;
  institucion: string;
  periodo: string;
  estado?: string;
  tipo: 'carrera' | 'curso' | 'idioma';
  descripcion?: string;
}

export const educacionData: EducacionItem[] = [
  {
    titulo: "Tecnicatura en Desarrollo de Software",
    institucion: "Instituto A. U. Illia",
    periodo: "2023 – 2025",
    estado: "Completado",
    tipo: "carrera",
    descripcion: "Formación integral en desarrollo de software, programación y tecnologías modernas."
  },
  {
    titulo: "Quality Control Automation",
    institucion: "Egg",
    periodo: "Agosto 2024 – Mayo 2025",
    estado: "Completado",
    tipo: "curso",
    descripcion: "Especialización en automatización de pruebas y control de calidad."
  },
  {
    titulo: "QA Manager",
    institucion: "Testing de Software – UTN",
    periodo: "2022",
    estado: "Completado",
    tipo: "curso",
    descripcion: "Gestión y metodologías de testing de software."
  },
  {
    titulo: "Diseño Web Responsive (HTML5/CSS3)",
    institucion: "BA Multiplica / UTN",
    periodo: "2022",
    estado: "Completado",
    tipo: "curso",
    descripcion: "Desarrollo web responsive con tecnologías modernas."
  },
  {
    titulo: "Lengua Inglesa",
    institucion: "Instituto Walt Whitman",
    periodo: "2008 – 2018",
    estado: "Completado",
    tipo: "idioma",
    descripcion: "Formación completa en idioma inglés con certificación."
  }
];

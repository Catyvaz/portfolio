import { Typography, Box, Paper, Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TranslateIcon from "@mui/icons-material/Translate";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { educacionData } from "../const/listaEducación";
import "../styles/educacion.css";

export const Educacion = () => {
  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case "carrera":
        return <SchoolIcon fontSize="small" />;
      case "curso":
        return <WorkspacePremiumIcon fontSize="small" />;
      case "idioma":
        return <TranslateIcon fontSize="small" />;
      default:
        return <RocketLaunchIcon fontSize="small" />;
    }
  };

  return (
    <section id="educacion" className="educacion-section">
      <h2>Educación</h2>

      <Timeline className="educacion-timeline" position="alternate">
        {educacionData.map((item, index) => {
          const isLast = index === educacionData.length - 1;

          return (
            <TimelineItem key={`${item.titulo}-${item.periodo}`}>
              <TimelineOppositeContent className="educacion-periodo">
                <Typography variant="subtitle2">{item.periodo}</Typography>
              </TimelineOppositeContent>

              <TimelineSeparator className="educacion-separator">
                <TimelineDot className={`educacion-dot ${item.tipo}`}>
                  {getTipoIcon(item.tipo)}
                </TimelineDot>
                {!isLast && (
                  <TimelineConnector className="educacion-connector" />
                )}
              </TimelineSeparator>

              <TimelineContent className="educacion-content">
                <Paper className="educacion-card">
                  <Stack className="educacion-card-header">
                    <Box className="educacion-card-details">
                      <Typography variant="h6" className="educacion-titulo">
                        {item.titulo}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className="educacion-institucion"
                      >
                        {item.institucion}
                      </Typography>
                    </Box>
                    <Box className="educacion-descripcion-tags">
                      {item.descripcion
                        ?.toString()
                        .split(",")
                        .map((data, index) => (
                          <div key={index} className="data-tag">
                            {data.trim()}
                          </div>
                        ))}
                    </Box>
                  </Stack>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
};

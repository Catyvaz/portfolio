import "../styles/educacion.css";
import { Typography, Box, Chip, Paper, Stack } from "@mui/material";
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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { educacionData } from "../const/listaEducación";

export const Educacion = () => {
  const getChipColor = (estado?: string) =>
    estado === "En curso" ? "primary" : "success";

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

      <Timeline className="educacion-timeline">
        {educacionData.map((item, index) => {
          const isLast = index === educacionData.length - 1;
          const isInProgress = item.estado === "En curso";

          return (
            <TimelineItem key={`${item.titulo}-${item.periodo}`}>
              <TimelineOppositeContent className="educacion-periodo">
                <Typography variant="subtitle2">{item.periodo}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  className={`educacion-dot ${isInProgress ? "dot-active" : "dot-complete"}`}
                >
                  {getTipoIcon(item.tipo)}
                </TimelineDot>
                {!isLast && <TimelineConnector className="educacion-connector" />}
              </TimelineSeparator>
              <TimelineContent className="educacion-content">
                <Paper elevation={0} className="educacion-card">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    gap={2}
                    className="educacion-card-header"
                  >
                    <Box className="educacion-card-details">
                      <Typography variant="h6" className="educacion-titulo">
                        {item.titulo}
                      </Typography>
                      <Typography variant="subtitle2" className="educacion-institucion">
                        {item.institucion}
                      </Typography>
                      <Typography variant="subtitle2" className="educacion-descripcion">
                        {item.descripcion}
                      </Typography>
                    </Box>
                    <Chip
                      label={item.estado ?? "Completado"}
                      color={getChipColor(item.estado)}
                      size="small"
                      icon={
                        isInProgress ? (
                          <PendingActionsIcon fontSize="small" />
                        ) : (
                          <CheckCircleOutlineIcon fontSize="small" />
                        )
                      }
                    />
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

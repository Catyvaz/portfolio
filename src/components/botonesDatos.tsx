import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import "../styles/botonesDatos.css";

interface BotonesDatosProps {
  icono: React.ComponentType<{ className?: string }>;
  enlace: string;
  texto?: string;
  descripcion?: string;
  onClick?: () => void;
}

export const BotonesDatos = (prop: BotonesDatosProps) => {
  const isClickableOnly = Boolean(prop.onClick);
  const isAnchor = !isClickableOnly && Boolean(prop.enlace);
  const isMailTo = prop.enlace?.startsWith("mailto:");

  const tooltip = isClickableOnly
    ? "Copiar correo"
    : isMailTo
      ? "Abrir cliente de correo"
      : isAnchor
        ? prop.descripcion
        : undefined;

  const hasText = Boolean(prop.texto);

  return (
    <Tooltip title={tooltip ?? ""} disableHoverListener={!tooltip} arrow>
      <Button
        variant="outlined"
        sx={{ color: "#8B7CD9", border: "2px solid #8B7CD9", margin: 0, borderRadius: 70 }}
        className="botones"
        component={isAnchor ? ("a" as any) : ("button" as any)}
        href={isAnchor ? prop.enlace : undefined}
        target={isAnchor ? "_blank" : undefined}
        rel={isAnchor ? "noopener noreferrer" : undefined}
        onClick={prop.onClick}
        startIcon={hasText ? <prop.icono className="icono" /> : undefined}
      >
        {!hasText && <prop.icono className="icono" />}
        {prop.texto ? prop.texto : null}
      </Button>
    </Tooltip>
  );
};

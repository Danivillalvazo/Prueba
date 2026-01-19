import { Box, Typography } from "@mui/material";
import { useState } from "react";
import SuppliersModalTabs from "./SuppliersModalTabs";

export default function SuppliersModalContent() {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* MENU SAP */}
      <SuppliersModalTabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue)}
      />

      {/* CONTENIDO */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 3
        }}
      >
        {tab === 0 && <GeneralTab />}
        {tab === 1 && <Typography>Personas de contacto</Typography>}
        {tab === 2 && <Typography>Direcciones</Typography>}
        {tab === 3 && <Typography>Condiciones de pago</Typography>}
        {tab === 4 && <Typography>Ejecución de pago</Typography>}
        {tab === 5 && <Typography>Finanzas</Typography>}
        {tab === 6 && <Typography>Propiedades</Typography>}
        {tab === 7 && <Typography>Comentarios</Typography>}
        {tab === 8 && <Typography>Anexos</Typography>}
        {tab === 9 && <Typography>Documentos electrónicos</Typography>}
      </Box>
    </Box>
  );
}

/* EJEMPLO TAB GENERAL */
function GeneralTab() {
  return (
    <Box>
      <Typography fontWeight={600} mb={2}>
        Datos generales
      </Typography>

      <Typography variant="body2" color="#94a3b8">
        Aquí va el formulario estilo SAP (nombre, RFC, moneda, grupo, etc.)
      </Typography>
    </Box>
  );
}

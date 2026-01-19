import { Tabs, Tab, Box } from "@mui/material";

interface SuppliersModalTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function SuppliersModalTabs({
  value,
  onChange
}: SuppliersModalTabsProps) {
  return (
    <Box
      sx={{
        // borderBottom: "1px solid #1e293b",
        // bgcolor: "#020617"
      }}
    >
      <Tabs
        value={value}
        onChange={onChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="inherit"
        TabIndicatorProps={{
          sx: { backgroundColor: "#38bdf8" }
        }}
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: 13,
            // color: "#cbd5e1",
            minHeight: 42
          },
          "& .Mui-selected": {
            color: "#38bdf8"
          }
        }}
      >
        <Tab label="General" />
        <Tab label="Personas de contacto" />
        <Tab label="Direcciones" />
        <Tab label="Condiciones de pago" />
        <Tab label="Ejecución de pago" />
        <Tab label="Finanzas" />
        <Tab label="Propiedades" />
        <Tab label="Comentarios" />
        <Tab label="Anexos" />
        <Tab label="Documentos electrónicos" />
      </Tabs>
    </Box>
  );
}

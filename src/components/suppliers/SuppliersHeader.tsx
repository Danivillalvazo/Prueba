import {
  Box,
  Typography,
  Button,
  Breadcrumbs,
  Link
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const SuppliersHeader = () => {
  return (
    <Box mb={3}>
      {/* Breadcrumb SOLO VISUAL */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{ color: "#94a3b8", mb: 1 }}
      >
        <Typography fontSize={14}>Home</Typography>
        <Typography fontSize={14}>Compras</Typography>
        <Typography fontSize={14} color="text.secondary">
          Proveedores
        </Typography>
      </Breadcrumbs>

      {/* Título + Acción */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" fontWeight={600}>
          Proveedores 
        </Typography> 

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: 2,
            backgroundColor: "#0f172a",
            "&:hover": {
              backgroundColor: "#020617"
            }
          }}
        >
          Nuevo proveedor
        </Button>
      </Box>
    </Box>
  );
};

export default SuppliersHeader;

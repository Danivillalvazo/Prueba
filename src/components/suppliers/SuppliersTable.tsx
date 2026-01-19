import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Imagen
import CocaColaLogo from "../../assets/img/coca-cola-logo.jpg";

export default function SuppliersTable() {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={CocaColaLogo}
        alt="Coca Cola"
      />

      <CardContent>
        {/* Nombre */}
        <Typography gutterBottom variant="h6" fontWeight={600}>
          Coca Cola
        </Typography>

        {/* Descripción */}
        <Typography variant="body2" color="text.secondary" mb={2}>
          Coca Cola es una empresa multinacional de bebidas conocida por su refresco homónimo.
        </Typography>

        {/* Info: Correo */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <EmailIcon fontSize="small" color="action" />
          <Typography fontSize={14}>
            contacto@cocacola.com
          </Typography>
        </Box>

        {/* Info: Número */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <PhoneIcon fontSize="small" color="action" />
          <Typography fontSize={14}>
            +52 33 1234 5678
          </Typography>
        </Box>

        {/* Info: Ubicación */}
        <Box display="flex" alignItems="center" gap={1}>
          <LocationOnIcon fontSize="small" color="action" />
          <Typography fontSize={14}>
            Guadalajara, México
          </Typography>
        </Box>

      {/* Footer */}

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}

      >

        <Typography
          fontSize={12} 
          color="text.secondary"
        >
          Actualizado hace 2 días
        </Typography>

         <Button
            variant="outlined"
            sx={{
              borderColor: "#2563eb",
              color: "#2563eb",
              textTransform: "none"
            }}
          >
            Ver más...
          </Button>


      </Box>
      </CardContent>

      {/* <CardActions sx={{ px: 2, pb: 2 }}>
        <Button size="small">Ver</Button>
        <Button size="small">Editar</Button>
      </CardActions> */}
    </Card>
  );
}

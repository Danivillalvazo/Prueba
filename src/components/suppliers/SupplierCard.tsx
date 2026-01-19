import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface Supplier {
  id: number;
  name: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  image: string;
  updatedAt: string;
}

interface Props {
  supplier: Supplier;
  handleOpen: () => void;
}

export default function SupplierCard({ supplier, handleOpen }: Props) {
  return (
    // <Card sx={{ width: 300, borderRadius: 3 }}>
    <Card 
     sx={{
        width: "100%",
        maxWidth: 345,
        minWidth: 275,
        borderRadius: 3
    }}
    >
      <CardMedia
        component="img"
        height="140"
        image={supplier.image}
        alt={supplier.name}
      />

      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {supplier.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {supplier.description}
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <EmailIcon fontSize="small" />
          <Typography fontSize={14}>{supplier.email}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <PhoneIcon fontSize="small" />
          <Typography fontSize={14}>{supplier.phone}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <LocationOnIcon fontSize="small" />
          <Typography fontSize={14}>{supplier.location}</Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize={12} color="text.secondary">
            {supplier.updatedAt}
          </Typography>

          <Button
            onClick={handleOpen}
            variant="outlined"
            size="small"
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
    </Card>
  );
}

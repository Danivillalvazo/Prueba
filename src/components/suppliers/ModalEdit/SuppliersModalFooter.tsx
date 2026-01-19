import { Box, Button } from "@mui/material";

interface SuppliersModalFooterProps {
  onClose: () => void;
}

export default function SuppliersModalFooter({
  onClose
}: SuppliersModalFooterProps) {
  return (
    <Box
      sx={{
        p: 2,
        borderTop: "1px solid #babbbd",
        display: "flex",
        justifyContent: "flex-end",
        gap: 1
      }}
    >
      <Button
        variant="outlined"
        color="inherit"
        onClick={onClose}
      >
        Cancelar
      </Button>

      <Button
        variant="contained"
        color="primary"
      >
        Guardar cambios
      </Button>
    </Box>
  );
}

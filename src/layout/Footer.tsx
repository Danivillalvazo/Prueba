import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: 48,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0f172a",
        color: "#cbd5e1"
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} ERP System
      </Typography>

      <Typography variant="body2">
        v1.0.0
      </Typography>
    </Box>
  );
}

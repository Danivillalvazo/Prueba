import { Box, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />

      <Box flex={1} display="flex" flexDirection="column">
          {/* Topbar fijo */}
        <Topbar />

        {/* Spacer para AppBar */}
        <Toolbar />

        {/* Contenido */}
        <Box
          component="main"
          sx={{
            flexGrow: 1, 
            p: 2,
            bgcolor: "#f8fafc",
            overflow: "auto"
          }}
        >
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}

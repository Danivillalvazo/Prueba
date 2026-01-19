import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Avatar,
  Divider
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/", { replace: true });
  };

  return (
    <AppBar
      position="fixed" 
      elevation={0}
      sx={{ backgroundColor: "#0f172a" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Título */}
        <Typography fontWeight={600} color="white">
          ERP Demo
        </Typography>

        {/* Acciones */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton sx={{ color: "#cbd5e1" }}>
            <NotificationsIcon />
          </IconButton>

          {/* Avatar Usuario */}
          <IconButton onClick={handleMenuOpen}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#334155",
                fontSize: 14
              }}
            >
              DR
            </Avatar>
          </IconButton>

          {/* Menú Usuario */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: 2,
                minWidth: 160
              }
            }}
          >
            <MenuItem disabled>Daniel Ramirez</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Cerrar sesión
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

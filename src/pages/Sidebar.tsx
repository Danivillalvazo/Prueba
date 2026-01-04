import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Collapse,
  Divider,
  IconButton,
  Box,
  Tooltip
} from "@mui/material";

import { FcShop, FcBusinessman, FcPackage } from "react-icons/fc";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const drawerWidth = 260;
const collapsedWidth = 72;

export default function Sidebar() {
  const [openCompras, setOpenCompras] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isComprasActive = location.pathname.startsWith("/compras");

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: collapsed ? collapsedWidth : drawerWidth,
          transition: "width 0.3s",
          boxSizing: "border-box",
          backgroundColor: "#0f172a",
          color: "#fff",
          overflowX: "hidden"
        }
      }}
    >
      {/* HEADER */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {!collapsed && (
          <Box display="flex" alignItems="center">
            <FcShop size={28} style={{ marginRight: 8 }} />
            <Typography variant="h6">ERP Demo</Typography>
          </Box>
        )}

        <IconButton onClick={() => setCollapsed(!collapsed)} sx={{ color: "#fff" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

      <List>
        {/* COMPRAS */}
        <Tooltip title={collapsed ? "Compras" : ""} placement="right">
          <ListItemButton
            onClick={() => setOpenCompras(!openCompras)}
            selected={isComprasActive}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(255,255,255,0.15)"
              }
            }}
          >
            <ListItemIcon>
              <FcShop size={24} />
            </ListItemIcon>

            {!collapsed && <ListItemText primary="Compras" />}
          </ListItemButton>
        </Tooltip>

        <Collapse in={openCompras || collapsed} timeout="auto" unmountOnExit={!collapsed}>
          <List component="div" disablePadding>
            {/* PROVEEDORES */}
            <Tooltip title={collapsed ? "Proveedores" : ""} placement="right">
              <ListItemButton
                component={Link}
                to="/compras/proveedores"
                selected={isActive("/compras/proveedores")}
                sx={{
                  pl: collapsed ? 2 : 4,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255,255,255,0.25)"
                  }
                }}
              >
                <ListItemIcon>
                  <FcBusinessman size={22} />
                </ListItemIcon>

                {!collapsed && <ListItemText primary="Proveedores" />}
              </ListItemButton>
            </Tooltip>

            {/* PRODUCTOS */}
            <Tooltip title={collapsed ? "Productos" : ""} placement="right">
              <ListItemButton
                component={Link}
                to="/compras/productos"
                selected={isActive("/compras/productos")}
                sx={{
                  pl: collapsed ? 2 : 4,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255,255,255,0.25)"
                  }
                }}
              >
                <ListItemIcon>
                  <FcPackage size={22} />
                </ListItemIcon>

                {!collapsed && <ListItemText primary="Productos" />}
              </ListItemButton>
            </Tooltip>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";

export default function Topbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "#fff", color: "#000" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography fontWeight={600}>Dashboard</Typography>

        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ borderRadius: 2 }}
          >
            Add New
          </Button>

          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

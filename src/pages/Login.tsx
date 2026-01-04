import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Paper,
  createTheme
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";

// Peticiones
import { loginService } from "../services/auth.service";

// Tema
import { createThem, ThemeProvider, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) { 
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    setLoading(true);

    try {
      await loginService(user.username, user.password);
      onLogin();
    } catch (error) {
      console.error("Error en el login:", error);
    } finally {
      setLoading(false);
    }

  };

  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    

      <Container maxWidth="xs">
        <Paper elevation={6} sx={{ mt: 10, p: 4 }}>
          <Box textAlign="center">
            <Avatar sx={{ bgcolor: "primary.main", mx: "auto", mb: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">Iniciar Sesión</Typography>
          </Box>

          <Box mt={3}>
            <TextField
              fullWidth
              label="Usuario"
              margin="normal"
              value={user.username}
              onChange={(e) => setUser({...user, username: e.target.value})}
            />

            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              margin="normal" 
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
              onClick={handleLogin}
            >
              {loading ? "Cargando..." : "Ingresar"}
            </Button>
          </Box>
        </Paper>
      </Container>

    </ThemeProvider>
  );
}

import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Paper,
  createTheme, 
  ThemeProvider,
  CssBaseline
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";

// Peticiones
import { loginService } from "../services/auth.service";

// Alertas
import { toast, ToastContainer } from "react-toastify";
 

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
    pwd: ""
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    setLoading(true);

    try {
      const result = await loginService(user.username, user.pwd);
      toast.success("¡Inicio de sesión exitoso!");
      console.log("Resultado del login:", result);
      onLogin();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error desconocido");
      return
    } finally {
      setLoading(false);
    }

  };

  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />

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
              value={user.pwd}
              onChange={(e) => setUser({ ...user, pwd: e.target.value })}
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

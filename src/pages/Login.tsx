import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Paper
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";

type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
      onLogin();
    } else {
      alert("Credenciales incorrectas ❌");
    }
  };

  return (
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
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            margin="normal"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

// import Login from "./pages/Login";

// export default function App() {
//   return <Login />;
// }


import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Sidebar from "./pages/Sidebar";
import Proveedores from "./pages/Proveedores";
import Productos from "./pages/Productos";
import { Box } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    return <Login onLogin={() => setIsAuth(true)} />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/compras/proveedores" />} />
          <Route path="/compras/proveedores" element={<Proveedores />} />
          <Route path="/compras/productos" element={<Productos />} />
        </Routes>
      </Box>
    </Box>
  );
}

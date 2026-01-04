import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import AppLayout from "../layout/AppLayout";
import Dashboard from "../pages/Dashboard";

/* 🔐 Protección */
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const auth = localStorage.getItem("auth") === "true";
  return auth ? children : <Navigate to="/Home" replace />;
}

/* 🔑 Wrapper Login */
function LoginWrapper() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/Home", { replace: true });
  };

  return <Login onLogin={handleLogin} />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginWrapper />
  },
  {
    path: "/Home",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  },
  /* 🚑 Cualquier ruta rara */
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

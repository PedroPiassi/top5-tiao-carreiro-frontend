import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RedirectBasedOnRole = () => {
  const user = useSelector((state) => state.auth.user);

  // Lógica condicional para redirecionar com base na role
  if (user?.role === "admin") {
    return <Navigate to="/pendentes" />;
  }

  return <Navigate to="/home" />;
};

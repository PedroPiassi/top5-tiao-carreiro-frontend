import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import AccessDenied from "../../components/accesDenied";

const checkRole = (user, allowedRoles) => {
  return user ? allowedRoles.includes(user.role) : false;
};

export const RoleProtected = ({ allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return checkRole(user, allowedRoles) ? <Outlet /> : <AccessDenied />;
};

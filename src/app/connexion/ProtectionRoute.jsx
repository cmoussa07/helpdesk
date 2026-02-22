// app/shared/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  isAuthenticated,
  allowedRole,
  userRole,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && userRole !== allowedRole) {
    // Rediriger vers l'interface appropriée
    if (userRole === "admin") {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/client" />;
    }
  }

  return children;
};

export default ProtectedRoute;

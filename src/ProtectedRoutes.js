import { Navigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;

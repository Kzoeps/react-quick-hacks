import { Children, ReactNode, useContext } from 'react';
import { AuthContext } from '@react-quick-hacks/firebase-auth';
import { Route, useLocation, Navigate } from 'react-router-dom';

export interface ProtectedRouteProps {
  children: JSX.Element;
  redirectPath: string
}

export const ProtectedRoute = ({children, redirectPath}: ProtectedRouteProps) => {
  const auth = useContext(AuthContext);
  const token = localStorage.getItem('token');
  const location = useLocation();
  if (!(auth.currentUser || token)) {
    return <Navigate to={redirectPath} state={{from: location}} replace/>
  }
  return children;
}

export default ProtectedRoute;

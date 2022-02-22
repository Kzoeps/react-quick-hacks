import { Children, ReactNode, useContext } from 'react';
import { AuthContext, AuthContextInfo, FirebaseAuthContextProps } from '@react-quick-hacks/firebase-auth';
import { Route, useLocation, Navigate } from 'react-router-dom';

export interface UnauthenticatedRouteProps {
  children: JSX.Element;
  redirectPath: string
}

export const UnauthenticatedRoute = ({children, redirectPath}: UnauthenticatedRouteProps) => {
  const auth = useContext<AuthContextInfo>(AuthContext);
  const token = localStorage.getItem('token');
  const location = useLocation();
  if (auth.currentUser || token) {
    return <Navigate to={redirectPath} state={{from: location}} replace/>
  }
  return children;
}

export default UnauthenticatedRoute;

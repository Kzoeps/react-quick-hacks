import { createContext, ReactNode, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './firebase-auth-context.module.scss';
import { FirebaseApp } from 'firebase/app';
import { User } from '@firebase/auth-types';
import { useNavigate } from 'react-router-dom';
import { GenericFunction } from '@react-quick-hacks/shared';

export interface AuthContextInfo {
  currentUser: undefined | User;
  phoneNumber: undefined | string | null;
  logout: GenericFunction | undefined;
}

export const AuthContext = createContext<AuthContextInfo>({currentUser: undefined, phoneNumber: undefined, logout: undefined });

export interface FirebaseAuthContextProps {
  app: FirebaseApp;
  children: ReactNode
}

export function FirebaseAuthContext({app, children}: FirebaseAuthContextProps) {
  const [contextState, setContextState] = useState<AuthContextInfo>({ currentUser: undefined, phoneNumber: undefined, logout: undefined });

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setContextState({
          currentUser: user as unknown as User,
          phoneNumber: user?.phoneNumber,
          logout: () => signOut(auth)
        });
        user.getIdToken().then((token) => {
          localStorage.setItem('token', token);
        });
      } else {
        setContextState({
          currentUser: undefined,
          phoneNumber: undefined,
          logout: undefined
        });
        localStorage.removeItem('token');
      }
    });
    return () => unsubscribe();
  }, [app])
  return (
    <AuthContext.Provider value={contextState}>
      {children}
    </AuthContext.Provider>
  );
}

export default FirebaseAuthContext;

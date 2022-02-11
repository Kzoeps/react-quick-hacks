import { createContext, ReactNode, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './firebase-auth-context.module.scss';
import { FirebaseApp } from 'firebase/app';
import { User } from '@firebase/auth-types';

export interface AuthContextInfo {
  currentUser: undefined | User;
  phoneNumber: undefined | string | null;
}

export const AuthContext = createContext<AuthContextInfo>({currentUser: undefined, phoneNumber: undefined });

export interface FirebaseAuthContextProps {
  app: FirebaseApp;
  children: ReactNode
}

export function FirebaseAuthContext({app, children}: FirebaseAuthContextProps) {
  const [listenerSetUp, setListenerSetUp] = useState(false);
  const [contextState, setContextState] = useState<AuthContextInfo>({ currentUser: undefined, phoneNumber: undefined});

  useEffect(() => {
    if (!listenerSetUp) {
      const auth = getAuth(app);
      console.log('listener set up')
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setContextState({
            currentUser: user as unknown as User,
            phoneNumber: user?.phoneNumber,
          })
          setListenerSetUp(true);
        } else {
          setContextState({
            currentUser: undefined,
            phoneNumber: undefined
          })
        }
      })
    }
  }, [listenerSetUp, app])
  return (
    <AuthContext.Provider value={contextState}>
      {children}
    </AuthContext.Provider>
  );
}

export default FirebaseAuthContext;

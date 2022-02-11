import './app.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FirebaseAuthContext } from '@react-quick-hacks/firebase-auth';
import { RoutesEnum } from './enums/routes-enum';
import { Login, SignUp } from './routes';
import Shell from './shell/shell';
import Dashboard from './routes/dashboard/dashboard';
import app from './firebase-config';

export function App() {
  return (
    <>
      <FirebaseAuthContext app={app}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Shell />}>
              <Route path={RoutesEnum.signUp} element={<SignUp />} />
              <Route path={RoutesEnum.login} element={<Login />} />
              <Route path={RoutesEnum.dashboard} element={<Dashboard />} />
              <Route path='' element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FirebaseAuthContext>
    </>

  );
}

export default App;

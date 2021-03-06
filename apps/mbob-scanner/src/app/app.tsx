import './app.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FirebaseAuthContext, ProtectedRoute, UnauthenticatedRoute } from '@react-quick-hacks/firebase-auth';
import { RoutesEnum } from './enums/routes-enum';
import { Login, SignUp } from './routes';
import Shell from './shell/shell';
import Dashboard from './routes/dashboard/dashboard';
import app from './firebase-config';
import EntryAddition from './routes/entry-addition/entry-addition';
import { MboxTransactionDetailContext } from './contexts/transaction-detail.context';
import RecordsListing from './routes/records-listing/records-listing';

export function App() {
  return (
    <>
      <FirebaseAuthContext app={app}>
        <MboxTransactionDetailContext>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Shell />}>
                <Route path={RoutesEnum.signUp} element={
                  <UnauthenticatedRoute
                    redirectPath={`/${RoutesEnum.dashboard}`}>
                    <SignUp />
                  </UnauthenticatedRoute>} />
                <Route path={RoutesEnum.login} element={
                  <UnauthenticatedRoute redirectPath={`/${RoutesEnum.dashboard}`}>
                    <Login />
                  </UnauthenticatedRoute>
                } />
                <Route
                  path={RoutesEnum.dashboard}
                  element={
                    <ProtectedRoute redirectPath={`/${RoutesEnum.login}`}>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={RoutesEnum.addRecord}
                  element={
                    <ProtectedRoute redirectPath={`/${RoutesEnum.login}`}>
                      <EntryAddition />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path={RoutesEnum.records}
                  element={
                    <ProtectedRoute redirectPath={`/${RoutesEnum.login}`}>
                      <RecordsListing />
                    </ProtectedRoute>
                  }
                />
                <Route path='' element={<ProtectedRoute redirectPath={`/${RoutesEnum.signUp}`}>
                  <Dashboard />
                </ProtectedRoute>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MboxTransactionDetailContext>
      </FirebaseAuthContext>
    </>
  );
}

export default App;

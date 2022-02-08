import './app.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { RoutesEnum } from './enums/routes-enum';
import { Login } from './routes';
import Shell from './shell/shell';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shell/>}>
            <Route path={RoutesEnum.login} element={<Login/>}/>
            <Route path={RoutesEnum.login} element={<Login/>}/>
            <Route path="" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

import './app.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Login } from './routes';
import Shell from './shell/shell';

const firebaseConfig = {
  apiKey: "AIzaSyC0OiZkEN5MkhUedhgAtvw2IQxQkrMvNlw",
  authDomain: "hacket-hacks.firebaseapp.com",
  projectId: "hacket-hacks",
  storageBucket: "hacket-hacks.appspot.com",
  messagingSenderId: "436150931702",
  appId: "1:436150931702:web:911ad9084a70fa72629cd7",
  measurementId: "G-SX3S3CSDQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shell/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

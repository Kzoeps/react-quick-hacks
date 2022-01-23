import './app.module.scss';
import { Button } from 'antd';
import React from 'react';
import { Layout } from '@react-quick-hacks/layout';
import Shell from './shell/shell';
import Login from './routes/login/login';

export function App() {
  return (
    <>
      <Shell>
        <p>Soy dora</p>
      </Shell>
    </>

  );
}

export default App;

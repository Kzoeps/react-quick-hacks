import './app.module.scss';
import { Button } from 'antd';
import React from 'react';
import { Layout } from '@react-quick-hacks/layout';

export function App() {
  return (
    <>
      <Button type="primary">Hello</Button>
      <Layout/>
    </>

  );
}

export default App;

import './app.module.scss';
import { Button } from 'antd';
import React from 'react';
import { Layout } from '@react-quick-hacks/layout';

export function App() {
  return (
    <>
      <Layout>
        <Button type="primary" ghost>Hello</Button>
      </Layout>
    </>

  );
}

export default App;

import './layout.module.scss';
import { Layout as AntDLayout, Menu, Breadcrumb, Button } from 'antd';
import React, { useState } from 'react';
import HktDrawer from './components/hkt-drawer/hkt-drawer';

/* eslint-disable-next-line */
export interface LayoutProps {}

const { Header, Content, Footer } = AntDLayout;

export function Layout(props: LayoutProps) {
  const [showDrawer, setShowDrawer] = useState<boolean>(true);
  const onDrawerClose = () => {
    setShowDrawer(false);
  };
  return (
    <AntDLayout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {arr.map(item => (
            <Menu.Item key={item}>
              <a href="https://www.google.com">navigation {item}</a>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </AntDLayout>
  );
}

export default Layout;

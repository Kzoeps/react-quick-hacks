import './layout.module.scss';
import { Breadcrumb, Button, Layout as AntDLayout, Menu } from 'antd';
import React, { useState } from 'react';
import HktDrawer from './components/hkt-drawer/hkt-drawer';
import { MenuUnfoldOutlined } from '@ant-design/icons';

/* eslint-disable-next-line */
export interface LayoutProps {}

const { Header, Content, Footer } = AntDLayout;

export function Layout(props: LayoutProps) {
  const [showDrawer, setShowDrawer] = useState<boolean>(true);
  const onDrawerClose = () => {
    setShowDrawer(false);
  };
  const arr = [1, 2, 3, 4, 5];
  return (
    <AntDLayout className="layout">
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Button shape='circle' icon={<MenuUnfoldOutlined />} onClick={() => setShowDrawer(true)} />
          <HktDrawer showDrawer={showDrawer} onDrawerClose={onDrawerClose} />
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

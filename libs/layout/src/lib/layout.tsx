import './layout.module.scss';
import { Button, Layout as AntDLayout, Menu } from 'antd';
import React, { ReactElement, useState } from 'react';
import HktDrawer from './components/hkt-drawer/hkt-drawer';
import { MenuUnfoldOutlined } from '@ant-design/icons';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactElement;
}

const { Header, Content, Footer } = AntDLayout;

export function Layout({children}: LayoutProps) {
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
          <Menu.Item>
            <Button shape='circle' icon={<MenuUnfoldOutlined />} onClick={() => setShowDrawer(true)} ghost />
            <HktDrawer showDrawer={showDrawer} onDrawerClose={onDrawerClose} />
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </AntDLayout>
  );
}

export default Layout;

import './layout.module.scss';
import { Layout as AntDLayout, Menu } from 'antd';
import React from 'react';

/* eslint-disable-next-line */
export interface LayoutProps {}

const { Sider } = AntDLayout;

export function Layout(props: LayoutProps) {
  return (
    <AntDLayout>
      <Sider
      breakpoint="lg"
      collapsedWidth="0">
        <div>LOGO HERE</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
    </AntDLayout>
  );
}

export default Layout;

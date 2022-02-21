import './layout.module.scss';
import { Button, Layout as AntDLayout, Menu } from 'antd';
import { ReactElement, useState } from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import HktDrawer from './components/hkt-drawer/hkt-drawer';
import { NavigationConfiguration } from './models';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactElement;
  showNav?: boolean;
  configuration?: NavigationConfiguration;
}

const { Header, Content, Footer } = AntDLayout;

export function Layout({children, configuration = [], showNav = false}: LayoutProps) {
  const [showDrawer, setShowDrawer] = useState<boolean>(true);
  const onDrawerClose = () => {
    setShowDrawer(false);
  };
  const navigate = useNavigate();
  const onNavItemClick = (link: string) => {
    navigate(`/${link}`);
  }
  const arr = [1, 2, 3, 4, 5];
  return (
    <AntDLayout className="layout">
      <Header>
        <div className='logo' />
        {
          showNav && <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[]}>
            <Menu.Item key='navigation-button'>
              <Button shape='circle' icon={<MenuUnfoldOutlined />} onClick={() => setShowDrawer(true)} ghost />
            </Menu.Item>
            {showDrawer && <Menu.Item key='navigation'>
              <HktDrawer showDrawer={showDrawer} onItemClick={onNavItemClick} onDrawerClose={onDrawerClose}
                         configuration={configuration} />
            </Menu.Item>
            }
          </Menu>
        }
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </AntDLayout>
  );
}

export default Layout;

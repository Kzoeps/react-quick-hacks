import './layout.module.scss';
import { Button, Layout as AntDLayout, Menu } from 'antd';
import { ReactElement, useState } from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import HktDrawer from './components/hkt-drawer/hkt-drawer';
import { NavigationConfiguration } from './models';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactElement;
  showNav?: boolean;
  configuration?: NavigationConfiguration;
  showLogout?: boolean;
  onLogoutClick?: () => void;
}

const { Header, Content, Footer } = AntDLayout;

export function Layout({
                         children,
                         configuration = [],
                         showNav = false,
                         showLogout = false,
                         onLogoutClick = () => undefined
                       }: LayoutProps) {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const onDrawerClose = () => {
    setShowDrawer(false);
  };
  const navigate = useNavigate();
  const onNavItemClick = (link: string) => {
    navigate(`/${link}`);
  };
  return (
    <AntDLayout className='layout'>
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
            {showLogout && <Menu.Item key='logout'>
              <Button type='ghost' onClick={onLogoutClick}>Logout</Button>
            </Menu.Item>}
          </Menu>
        }
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Hacket Co ©{dayjs().year()}</Footer>
    </AntDLayout>
  );
}

export default Layout;

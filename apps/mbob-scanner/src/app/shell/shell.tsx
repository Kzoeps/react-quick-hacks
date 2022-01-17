import './shell.module.scss';
import { Layout } from '@react-quick-hacks/layout';
import { Outlet } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ShellProps {}

export function Shell(props: ShellProps) {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  );
}

export default Shell;

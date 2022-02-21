import './shell.module.scss';
import { Layout } from '@react-quick-hacks/layout';
import { Outlet } from 'react-router-dom';
import { AuthContext, AuthContextInfo } from '@react-quick-hacks/firebase-auth';
import { useContext } from 'react';
import { NAVIGATION_CONSTANTS } from '../models/record-listing.constants';

/* eslint-disable-next-line */
export interface ShellProps {}

export function Shell(props: ShellProps) {
  const {phoneNumber}= useContext<AuthContextInfo>(AuthContext);
  return (
    <Layout showNav={!!phoneNumber} configuration={NAVIGATION_CONSTANTS}>
      <Outlet/>
    </Layout>
  );
}

export default Shell;

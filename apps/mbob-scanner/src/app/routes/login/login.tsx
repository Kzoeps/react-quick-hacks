import './login.module.scss';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LoginForm } from '@react-quick-hacks/auth';

/* eslint-disable-next-line */
export interface LoginProps {
}

export function Login(props: LoginProps) {
  return (
    <>
      <LoginForm/>
    </>
  );
}

export default Login;

import './login.module.scss';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

/* eslint-disable-next-line */
export interface LoginProps {
}

export function Login(props: LoginProps) {
  return (
    <>
      <Input placeholder='Phone Number' prefix={<UserOutlined />} type='number' />
      <Button type="primary">Generate OTP</Button>
    </>
  );
}

export default Login;

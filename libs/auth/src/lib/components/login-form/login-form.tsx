import './login-form.module.scss';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

/* eslint-disable-next-line */
export interface LoginFormProps {
  onSubmit:
}

export function LoginForm(props: LoginFormProps) {
  return (
    <div>
      <Input placeholder="Phone Number" type="number" prefix={<UserOutlined/>}/>
      <Button type="primary">Generate OTP</Button>
    </div>
  );
}

export default LoginForm;

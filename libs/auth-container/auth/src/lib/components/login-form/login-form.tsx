import './login-form.module.scss';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GenericFunction } from '@react-quick-hacks/shared';
import { HacketInput } from '@react-quick-hacks/ui-kit';

export interface LoginFormProps {
  onSubmit: GenericFunction;
  buttonLabel?: string
}

export function LoginForm({onSubmit, buttonLabel = 'Generate OTP'}: LoginFormProps) {
  return (
    <div>
      <HacketInput
        label="Phone Number"
        name="phoneNumber"
      />
      <Input placeholder="Phone Number" type="number" prefix={<UserOutlined/>}/>
      <Button type="primary" onClick={onSubmit}>{buttonLabel}</Button>
    </div>
  );
}

export default LoginForm;

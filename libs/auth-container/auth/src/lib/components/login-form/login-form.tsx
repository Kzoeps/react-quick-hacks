import './login-form.module.scss';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GenericFunction } from '@react-quick-hacks/shared';
import { HacketInput } from '@react-quick-hacks/ui-kit';
import { Formik, Form } from 'formik';

export interface LoginFormProps {
  onSubmit: GenericFunction;
  buttonLabel?: string;
}

export function LoginForm({ onSubmit, buttonLabel = 'Generate OTP' }: LoginFormProps) {
  const initialVals = {
    phoneNumber: ''
  }
  return
  (
    <div>
      <Formik initialValues={initialVals} onSubmit={(values) => {console.log(values)}}>
        <Form>
          <HacketInput
            placeholder='Phone Number'
            prefix={<UserOutlined />}
            type='number'
            name='phoneNumber'
          />
          <Button htmlType='submit' type='primary'>{buttonLabel}</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;

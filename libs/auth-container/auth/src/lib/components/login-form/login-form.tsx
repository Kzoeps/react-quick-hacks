import './login-form.module.scss';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GenericFunction } from '@react-quick-hacks/shared';
import { HacketInput } from '@react-quick-hacks/ui-kit';
import { Formik, Form, FormikValues } from 'formik';
import { PHONE_NUMBER_INITIAL_VALUES } from '../../models';

export interface LoginFormProps {
  onSubmit: (values: { phoneNumber: string} ) => void;
  buttonLabel?: string;
}

export function LoginForm({ onSubmit, buttonLabel = 'Generate OTP' }: LoginFormProps) {
  return (
    <div>
      <Formik initialValues={PHONE_NUMBER_INITIAL_VALUES} onSubmit={onSubmit}>
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

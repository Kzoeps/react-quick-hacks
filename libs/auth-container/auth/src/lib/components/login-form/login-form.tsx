import './login-form.module.scss';
import { Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { HacketInput } from '@react-quick-hacks/ui-kit';
import { Form, Formik } from 'formik';
import { PHONE_NUMBER_INITIAL_VALUES } from '../../models';
import { PhoneOtpFormValues } from '../../models/models';

export interface LoginFormProps {
  onSubmit: (values: PhoneOtpFormValues) => void;
  formInitialValues?: PhoneOtpFormValues;
  buttonLabel?: string;
  showOtpEntry?: boolean;
}

export function LoginForm({
                            onSubmit,
                            buttonLabel = 'Generate OTP',
                            formInitialValues = PHONE_NUMBER_INITIAL_VALUES,
                            showOtpEntry = false
                          }: LoginFormProps) {
  return (
    <div>
      <Formik initialValues={formInitialValues} onSubmit={onSubmit}>
        <Form>
          <HacketInput
            placeholder='Phone Number'
            prefix={<UserOutlined />}
            type='number'
            name='phoneNumber'
          />
          {showOtpEntry && <HacketInput name='otp' placeholder='OTP' type='number' prefix={<LockOutlined />} />}
          <Button htmlType='submit' type='primary'>{buttonLabel}</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;

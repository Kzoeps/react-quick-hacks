import { Form, Formik } from 'formik';
import './sign-up-form.module.scss';
import { HacketSelect, HacketInput } from '@react-quick-hacks/ui-kit';
import { HomeTwoTone, LockOutlined, PhoneTwoTone, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { DZONGKHAG_OPTIONS } from '@react-quick-hacks/shared';
import { SignUpFormValues } from '../../models';

export type SignUpControlNames = 'phoneNumber' | 'name' | 'dzongkhag'

/* eslint-disable-next-line */
export interface SignUpFormProps {
  onSubmit: (values: SignUpFormValues) => void;
  buttonLabel?: string;
  controlsToDisable?: SignUpControlNames[] ;
  showOtpEntry?: boolean;
}

export function SignUpForm({controlsToDisable = [], onSubmit, showOtpEntry = false, buttonLabel='Generate OTP'}: SignUpFormProps) {
  const initialValues: SignUpFormValues = {
    phoneNumber: '',
    name: '',
    dzongkhag:''
  }
  return (
    <div>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
        <Form>
          <HacketInput
            placeholder='Phone Number'
            prefix={<PhoneTwoTone />}
            type='number'
            name='phoneNumber'
            disabled={controlsToDisable.includes('phoneNumber')}
          />
          <HacketInput
            name="name"
            placeholder="Name"
            prefix={<UserOutlined />}
            disabled={controlsToDisable.includes('name')}
          />
          <HacketSelect
            name="dzongkhag"
            validate={undefined}
            disabled={controlsToDisable.includes('dzongkhag')}
            placeholder="Dzongkhag"
            options={DZONGKHAG_OPTIONS}
            />
          <br/>
          {showOtpEntry && <HacketInput name='otp' placeholder='OTP' type='number' prefix={<LockOutlined />} />}
          <Button htmlType='submit' type='primary' >{buttonLabel}</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUpForm;

import React from 'react';
import { Form, Formik } from 'formik';
import './sign-up-form.module.scss';
import { HacketInput } from '@react-quick-hacks/ui-kit';
import { UserOutlined } from '@ant-design/icons';

/* eslint-disable-next-line */
export interface SignUpFormProps {}

export function SignUpForm(props: SignUpFormProps) {
  const initialValues = {
    phoneNumber: '',
    name: '',
    dzongkhag:''
  }
  return (
    <div>
      <Formik
      initialValues={initialValues}
      onSubmit={console.log}>
        <Form>
          <HacketInput
            placeholder='Phone Number'
            prefix={<UserOutlined />}
            type='number'
            name='phoneNumber'
          />
          <HacketInput
            name="name"
            placeholder="Name"
            prefix={<UserOutlined />}
          />
          <HacketInput
            name="dzongkhag"
            placeholder="Dzongkhag"
            prefix={<UserOutlined />}/>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUpForm;

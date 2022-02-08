import React from 'react';
import { Form, Formik } from 'formik';
import './sign-up-form.module.scss';
import { HacketInput } from '@react-quick-hacks/ui-kit';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';

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
      onSubmit={(vals) => console.log(vals)}>
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
            name='dzongkhag'
            placeholder='Dzongkhag'
            prefix={<UserOutlined />} />
          <Button htmlType='submit' type='primary' >Generate</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUpForm;

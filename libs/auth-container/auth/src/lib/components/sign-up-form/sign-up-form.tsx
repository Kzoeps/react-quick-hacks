import { Form, Formik } from 'formik';
import './sign-up-form.module.scss';
import { HacketSelect, HacketInput } from '@react-quick-hacks/ui-kit';
import { HomeTwoTone, PhoneTwoTone, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { DZONGKHAG_OPTIONS } from '@react-quick-hacks/shared';

/* eslint-disable-next-line */
export interface SignUpFormProps {
}

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
            prefix={<PhoneTwoTone />}
            type='number'
            name='phoneNumber'
          />
          <HacketInput
            name="name"
            placeholder="Name"
            prefix={<UserOutlined />}
          />
          <HacketSelect
            name="dzongkhag"
            validate={undefined}
            placeholder="Dzongkhag"
            options={DZONGKHAG_OPTIONS}
            />
          <br/>
          <Button htmlType='submit' type='primary' >Generate</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUpForm;

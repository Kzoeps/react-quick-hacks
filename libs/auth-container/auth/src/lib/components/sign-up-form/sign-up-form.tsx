import { Form, Formik } from 'formik';
import './sign-up-form.module.scss';
import { HacketSelect, HacketInput } from '@react-quick-hacks/ui-kit';
import { HomeTwoTone, PhoneTwoTone, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { DZONGKHAG_OPTIONS } from '@react-quick-hacks/shared';
import { SignUpFormValues } from '../../models';

export type SignUpControlNames = 'phoneNumber' | 'name' | 'dzongkhag'

/* eslint-disable-next-line */
export interface SignUpFormProps {
  onSubmit: (values: SignUpFormValues) => void;
  controlsToDisable?: SignUpControlNames[] ;
}

export function SignUpForm({controlsToDisable = [], onSubmit}: SignUpFormProps) {
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
          <Button htmlType='submit' type='primary' >Generate</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUpForm;

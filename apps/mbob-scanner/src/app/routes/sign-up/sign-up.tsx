import { useState } from 'react';
import { SignUpControlNames, SignUpForm, SignUpFormValues } from '@react-quick-hacks/auth';
import style from './sign-up.module.scss';

/* eslint-disable-next-line */
export interface SignUpProps {}

export function SignUp(props: SignUpProps) {
  const [showOtp, setShowOtp] = useState(false);
  const DISABLED_CONTROLS: SignUpControlNames[] = ['phoneNumber', 'name', 'dzongkhag'];
  const generateOtp = (signUpForm: SignUpFormValues) => {
    console.log(signUpForm);
    setShowOtp(true);
  };

  const verifyOtp = (signUpForm: SignUpFormValues) => {
    console.log(signUpForm);
  };
  return (
    <div>
      <SignUpForm onSubmit={showOtp ? verifyOtp :generateOtp} controlsToDisable={showOtp ? DISABLED_CONTROLS : []}/>
    </div>
  );
}

export default SignUp;

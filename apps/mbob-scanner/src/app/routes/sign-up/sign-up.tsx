import { useState } from 'react';
import { SignUpControlNames, SignUpForm, SignUpFormValues } from '@react-quick-hacks/auth';
import { usePhoneVerify } from '@react-quick-hacks/firebase-auth';
import app from '../../firebase-config';

/* eslint-disable-next-line */
export interface SignUpProps {}

export function SignUp(props: SignUpProps) {
  const [showOtp, setShowOtp] = useState(false);
  const DISABLED_CONTROLS: SignUpControlNames[] = ['phoneNumber', 'name', 'dzongkhag'];
  const verifyPhone = usePhoneVerify(app);
  const generateOtp = async (signUpForm: SignUpFormValues) => {
    const { phoneNumber } = signUpForm;
    await verifyPhone.sendVerification(`+975${phoneNumber}`);
    setShowOtp(true);
  };

  const verifyOtp = (signUpForm: SignUpFormValues) => {
    console.log(signUpForm);
  };
  return (
    <>
      <SignUpForm onSubmit={showOtp ? verifyOtp :generateOtp} showOtpEntry={showOtp} controlsToDisable={showOtp ? DISABLED_CONTROLS : []}/>
      <div id='recaptcha-container' />
    </>
  );
}

export default SignUp;

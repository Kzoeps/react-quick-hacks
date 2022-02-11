import './login.module.scss';
import { LoginForm, PhoneOtpFormValues } from '@react-quick-hacks/auth';
import { usePhoneVerify } from '@react-quick-hacks/firebase-auth';
import { useEffect, useState } from 'react';
import app from '../../firebase-config';

/* eslint-disable-next-line */
export interface LoginProps {
}

export function Login(props: LoginProps) {
  const [showOtp, setShowOtp] = useState<boolean>(false);
  const verifyPhone = usePhoneVerify(app);

  const generateOtp = async ({ phoneNumber }: PhoneOtpFormValues) => {
    await verifyPhone.sendVerification(`+975${phoneNumber}`);
    setShowOtp(true);
  };
  const verifyOtp = async ({ phoneNumber, otp }: PhoneOtpFormValues) => {
    if (otp) await verifyPhone.verifyOtp(otp);
  };

  const handleLogin = async (formValues: PhoneOtpFormValues) => {
    if (showOtp) await verifyOtp(formValues);
    else await generateOtp(formValues);
  };

  useEffect(() => () => {
    setShowOtp(false);
  }, []);
  return (
    <>
      <LoginForm onSubmit={handleLogin} showOtpEntry={showOtp} buttonLabel={showOtp ? 'Login' : 'Generate Otp'} />
      <div id='recaptcha-container' />
    </>
  );
}

export default Login;

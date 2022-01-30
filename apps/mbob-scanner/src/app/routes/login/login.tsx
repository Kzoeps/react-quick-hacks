import './login.module.scss';
import { LoginForm } from '@react-quick-hacks/auth';
import { usePhoneVerify } from '@react-quick-hacks/firebase-auth';
import app from '../../firebase-config';

/* eslint-disable-next-line */
export interface LoginProps {
}

export function Login(props: LoginProps) {
  const verifyPhone = usePhoneVerify(app);
  const temp = async () => {
    await verifyPhone.sendVerification('+97517123456')
  }
  return (
    <>
      <LoginForm onSubmit={temp}/>
      <div id="recaptcha-container" />
    </>
  );
}

export default Login;

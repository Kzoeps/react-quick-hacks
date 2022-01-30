import './login.module.scss';
import { LoginForm } from '@react-quick-hacks/auth';
import { usePhoneVerify } from '@react-quick-hacks/firebase-auth';

/* eslint-disable-next-line */
export interface LoginProps {
}

export function Login(props: LoginProps) {
  const temp = () => console.log('ufsl');
  const verifyPhone = usePhoneVerify();
  return (
    <>
      <LoginForm onSubmit={temp}/>
    </>
  );
}

export default Login;

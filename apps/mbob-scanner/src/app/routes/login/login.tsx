import './login.module.scss';
import { LoginForm } from '@react-quick-hacks/auth';

/* eslint-disable-next-line */
export interface LoginProps {
}

export function Login(props: LoginProps) {
  const temp = () => console.log('ufsl');
  return (
    <>
      <LoginForm onSubmit={temp}/>
    </>
  );
}

export default Login;

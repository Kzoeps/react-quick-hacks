import { useState } from 'react';
import style from './sign-up.module.scss';

/* eslint-disable-next-line */
export interface SignUpProps {}

export function SignUp(props: SignUpProps) {
  const [showOtp, setShowOtp] = useState(false);
  return (
    <div>
      <h1>Welcome to sign-up!</h1>
    </div>
  );
}

export default SignUp;

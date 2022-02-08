import './sign-up.module.scss';
import { useState } from 'react';

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

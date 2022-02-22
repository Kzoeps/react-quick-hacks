import { useEffect, useState } from 'react';
import { SignUpControlNames, SignUpForm, SignUpFormValues } from '@react-quick-hacks/auth';
import { usePhoneVerify } from '@react-quick-hacks/firebase-auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { appendBhtCode, NotificationTypeEnum, showNotification } from '@react-quick-hacks/shared';
import { useNavigate } from 'react-router-dom';
import app from '../../firebase-config';
import { RoutesEnum } from '../../enums/routes-enum';

/* eslint-disable-next-line */
export interface SignUpProps {}

export function SignUp(props: SignUpProps) {
  const [showOtp, setShowOtp] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const DISABLED_CONTROLS: SignUpControlNames[] = ['phoneNumber', 'name', 'dzongkhag'];
  const verifyPhone = usePhoneVerify(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  const generateOtp = async (signUpForm: SignUpFormValues) => {
    setShowLoader(true);
    const { phoneNumber } = signUpForm;
    await verifyPhone.sendVerification(`+975${phoneNumber}`);
    setShowLoader(false);
    setShowOtp(true);
  };

  const setUpUserProfile = async (signUpForm: SignUpFormValues) => {
    const { phoneNumber, name, dzongkhag } = signUpForm;
    await setDoc(doc(db, 'users', appendBhtCode(phoneNumber as string)), {
      phoneNumber,
      name,
      dzongkhag
    })
  };

  const verifyOtp = async (signUpForm: SignUpFormValues) => {
    try {
      const { otp } = signUpForm;
      if (otp) {
        setShowLoader(true);
        const signedIn = await verifyPhone.verifyOtp(otp)
        if (signedIn) {
          await setUpUserProfile(signUpForm);
          showNotification('Thanks for signing up', NotificationTypeEnum.Success);
          navigate(`/${RoutesEnum.dashboard}`, { replace: true });
        }
      }
    } catch (e) {
      showNotification(e.message, NotificationTypeEnum.Error);
    }
  };

  useEffect(() => () => {
    setShowLoader(false);
  },[]);
  return (
    <>
      <SignUpForm
        onSubmit={showOtp ? verifyOtp : generateOtp}
        showOtpEntry={showOtp}
        showLoader={showLoader}
        buttonLabel={showOtp ? 'Sign Up' : 'Generate OTP'}
        controlsToDisable={showOtp ? DISABLED_CONTROLS : []} />
      <a href={`/${RoutesEnum.login}`}>Login</a>
      <div id='recaptcha-container' />
    </>
  );
}

export default SignUp;

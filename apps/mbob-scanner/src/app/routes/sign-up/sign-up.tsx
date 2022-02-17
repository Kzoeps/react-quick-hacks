import { useState } from 'react';
import { SignUpControlNames, SignUpForm, SignUpFormValues } from '@react-quick-hacks/auth';
import { usePhoneVerify } from '@react-quick-hacks/firebase-auth';
import { getFirestore, doc, setDoc } from "firebase/firestore"
import { appendBhtCode, NotificationTypeEnum, showNotification } from '@react-quick-hacks/shared';
import { useNavigate } from 'react-router-dom';
import app from '../../firebase-config';
import { RoutesEnum } from '../../enums/routes-enum';

/* eslint-disable-next-line */
export interface SignUpProps {}

export function SignUp(props: SignUpProps) {
  const [showOtp, setShowOtp] = useState(false);
  const DISABLED_CONTROLS: SignUpControlNames[] = ['phoneNumber', 'name', 'dzongkhag'];
  const verifyPhone = usePhoneVerify(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  const generateOtp = async (signUpForm: SignUpFormValues) => {
    const { phoneNumber } = signUpForm;
    await verifyPhone.sendVerification(`+975${phoneNumber}`);
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
        const signedIn = await verifyPhone.verifyOtp(otp)
        if (signedIn) {
          await setUpUserProfile(signUpForm);
          showNotification('Thanks for signing up', NotificationTypeEnum.Success);
          navigate(`/${RoutesEnum.dashboard}`, {replace: true});
        }
      }
    } catch (e) {
      showNotification(e.message, NotificationTypeEnum.Error);
    }
  };
  return (
    <>
      <SignUpForm
        onSubmit={showOtp ? verifyOtp :generateOtp}
        showOtpEntry={showOtp}
        buttonLabel={showOtp ? 'Sign Up' : 'Generate OTP'}
        controlsToDisable={showOtp ? DISABLED_CONTROLS : []}/>
      <div id='recaptcha-container' />
    </>
  );
}

export default SignUp;

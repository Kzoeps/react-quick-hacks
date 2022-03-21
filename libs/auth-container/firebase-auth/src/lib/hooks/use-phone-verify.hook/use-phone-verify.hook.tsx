import './use-phone-verfiy.hook.module.scss';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { ConfirmationResult } from '@firebase/auth-types';
import { FirebaseApp } from 'firebase/app';
import { useRef } from 'react';
import { useToast } from '@chakra-ui/react';

export interface UsePhoneVerify {
  sendVerification: (phoneNumber: string) => Promise<void>;
  verifyOtp: (otp: string) => Promise<boolean | void>;
}

export const generateRecaptcha = (app: FirebaseApp) => {
  const auth = getAuth(app);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    size: 'invisible',
    callback: (response: unknown) => {
      console.log(response);
    }
  }, auth);
};


export function usePhoneVerify(app: FirebaseApp): UsePhoneVerify {
  const auth = getAuth(app);
  const number = useRef('');
  const confirmationResult = useRef<ConfirmationResult | undefined>(undefined);

  const sendVerification = async (phoneNumber: string): Promise<void> => {
    number.current = phoneNumber;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!window.recaptchaVerifier) generateRecaptcha();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    confirmationResult.current = await signInWithPhoneNumber(auth, number.current, window.recaptchaVerifier);
  };

  const verifyOtp = async (otp: string): Promise<boolean | void> => {
    if (confirmationResult.current) {
        await confirmationResult.current?.confirm(otp);
    } else {
      return false;
    }
  };

  return ({
    sendVerification,
    verifyOtp
  });
}

export default usePhoneVerify;

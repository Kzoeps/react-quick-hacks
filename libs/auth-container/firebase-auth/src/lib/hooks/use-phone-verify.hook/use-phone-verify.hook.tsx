import { notification } from 'antd';
import './use-phone-verfiy.hook.module.scss';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { ConfirmationResult } from '@firebase/auth-types';
import { FirebaseApp } from 'firebase/app';
import { useRef } from 'react';
import NotificationTypeEnum from '../../enums/firebase-auth.enum';

export interface UsePhoneVerify {
  sendVerification: (phoneNumber: string) => Promise<void>;
  verifyOtp: (otp: string) => Promise<boolean>;
}

export function usePhoneVerify(app: FirebaseApp): UsePhoneVerify {
  const auth = getAuth(app);
  const number = useRef('');
  const confirmationResult = useRef<ConfirmationResult | undefined>(undefined);
  const showNotification = (message: string, type: NotificationTypeEnum, description?: string) => {
    notification[type]({
      message,
      description
    });
  };

  const generateRecaptcha = () => {
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore
     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
       size: 'invisible',
       callback: (response: unknown) => {
       }
     }, auth);
  }

  const sendVerification = async (phoneNumber: string): Promise<void> => {
    if (!phoneNumber) {
      showNotification('Phone Number Required', NotificationTypeEnum.Error);
      return;
    }
    number.current = phoneNumber;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!window.recaptchaVerifier) generateRecaptcha();
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      confirmationResult.current = await signInWithPhoneNumber(auth, number.current, window.recaptchaVerifier);
      showNotification('Verification Code Sent', NotificationTypeEnum.Success);
    } catch (e) {
      showNotification(e.message, NotificationTypeEnum.Error);
    }
  };

  const verifyOtp = async (otp: string): Promise<boolean> => {
    if (confirmationResult.current) {
      try {
        await confirmationResult.current?.confirm(otp);
        showNotification('Verification Successful', NotificationTypeEnum.Success);
        return true;
      } catch (error) {
        showNotification(error.message, NotificationTypeEnum.Error);
        return false;
      }
    } else {
      showNotification('Oops something went wrong', NotificationTypeEnum.Error);
      return false;
    }
  };

  return ({
    sendVerification,
    verifyOtp
  });
}

export default usePhoneVerify;

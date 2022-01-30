import { notification } from 'antd';
import './use-phone-verfiy.hook.module.scss';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { ApplicationVerifier, ConfirmationResult } from '@firebase/auth-types';
import { FirebaseApp } from 'firebase/app';
import { useState } from 'react';
import NotificationTypeEnum from '../../enums/firebase-auth.enum';

export interface UsePhoneVerify {
  sendVerification: (phoneNumber: string) => Promise<void>;
  confirmCode: (otp: string) => Promise<void>;
}

export function usePhoneVerify(app: FirebaseApp): UsePhoneVerify {
  const auth = getAuth(app);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | undefined>(undefined);
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
       callback: (response: unknown) => undefined
     }, auth);
  }

  const sendVerification = async (phoneNumber: string) => {
    if (!phoneNumber) {
      showNotification('Phone Number Required', NotificationTypeEnum.Error);
      return;
    }
    generateRecaptcha()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
      .then((result) => {
        setConfirmationResult(result as unknown as ConfirmationResult);
        showNotification('Verification Code Sent', NotificationTypeEnum.Success);
      })
      .catch(error => {
        showNotification(error.message, NotificationTypeEnum.Error);
      });
  };

  const confirmCode = async (otp: string): Promise<void> => {
    if (confirmationResult) {
      try {
        await confirmationResult?.confirm(otp);
        showNotification('Verification Successful', NotificationTypeEnum.Success);
      } catch (error) {
        showNotification(error.message, NotificationTypeEnum.Error);
      }
    } else {
      showNotification('Oops something went wrong', NotificationTypeEnum.Error);
    }
  };

  return ({
    sendVerification,
    confirmCode
  });
}

export default usePhoneVerify;

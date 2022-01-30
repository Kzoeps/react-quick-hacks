import { notification } from 'antd';
import './use-phone-verfiy.hook.module.scss';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { ApplicationVerifier } from '@firebase/auth-types';
import { FirebaseApp } from 'firebase/app';
import NotificationTypeEnum from '../../enums/firebase-auth.enum';

export interface UsePhoneVerify {
  sendVerification: (phoneNumber: string) => Promise<void>;
}

export function usePhoneVerify(app: FirebaseApp): UsePhoneVerify {
  console.log(app);
  const auth = getAuth(app);
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
         console.log(response);
       }
     }, auth);
  }

  const sendVerification = async (phoneNumber: string) => {
    if (!phoneNumber) {
      showNotification('Phone Number Required', NotificationTypeEnum.Error);
      return;
    }
    generateRecaptcha()
    signInWithPhoneNumber(auth, phoneNumber, window['recaptchaVerifier'])
      .then(() => {
        showNotification('Verification Code Sent', NotificationTypeEnum.Success);
      })
      .catch(error => {
        showNotification(error.message, NotificationTypeEnum.Error);
      });
  };
  return ({
    sendVerification
  });
}

export default usePhoneVerify;

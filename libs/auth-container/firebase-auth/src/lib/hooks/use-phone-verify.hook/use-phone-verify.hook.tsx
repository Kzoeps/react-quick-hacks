import { notification } from 'antd';
import './use-phone-verfiy.hook.module.scss';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { ApplicationVerifier } from '@firebase/auth-types';
import NotificationTypeEnum from '../../enums/firebase-auth.enum';

export interface UsePhoneVerify {
  sendVerification: (phoneNumber: string) => Promise<void>;
}

export function usePhoneVerify(): UsePhoneVerify {
  const auth = getAuth();
  const appVerifier = new RecaptchaVerifier('sign-in',{
    size: 'invisible',
    callback: (response: string) => {
      console.log(response);
    },
  }, auth)

  const showNotification = (message: string, type: NotificationTypeEnum, description?: string) => {
    notification[type]({
      message,
      description
    });
  };

  const sendVerification = async (phoneNumber: string) => {
    if (!phoneNumber) {
      showNotification('Phone Number Required', NotificationTypeEnum.Error);
      return;
    }
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
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

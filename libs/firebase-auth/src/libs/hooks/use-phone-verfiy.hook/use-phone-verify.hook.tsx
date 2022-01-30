import { notification } from 'antd';
import './use-phone-verfiy.hook.module.scss';
import { NotificationTypeEnum } from '../../enums/firebase-auth.enum';

/* eslint-disable-next-line */
export interface UsePhoneVerifyHookProps {}
export interface UsePhoneVerify {
  sendVerification: (phoneNumber: string) => Promise<void>;
}

export function usePhoneVerify(props: UsePhoneVerifyHookProps): UsePhoneVerify {

  const sendVerification = async (phoneNumber: string) => {
    if (!phoneNumber) showNotification('Phone Number Required', NotificationTypeEnum.Error);
  }

  const showNotification = (message: string, type: NotificationTypeEnum, description?: string) => {
    notification[type]({
      message,
      description
    })
  }

  return ({
    sendVerification
  })
}

export default usePhoneVerify;

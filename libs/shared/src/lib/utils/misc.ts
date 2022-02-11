import { notification } from 'antd';
import { NotificationTypeEnum } from '@react-quick-hacks/shared';

export const showNotification = (message: string, type: NotificationTypeEnum, description?: string) => {
  notification[type]({
    message,
    description,
  });
}

export default showNotification;

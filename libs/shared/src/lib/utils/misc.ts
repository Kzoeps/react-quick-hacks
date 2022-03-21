import { notification } from 'antd';
import { NotificationTypeEnum } from '../models';
import { UseToastOptions } from '@chakra-ui/react';

export const showNotification = (message: string, type: NotificationTypeEnum, description?: string) => {
  notification[type]({
    message,
    description,
  });
}

export const getToastConfig = (title: string, status: NotificationTypeEnum,description = ''): UseToastOptions => ({
  title,
  status,
  description,
})

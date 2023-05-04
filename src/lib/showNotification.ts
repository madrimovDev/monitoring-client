import {notification} from 'antd';
import {capitalizeFirstLetter} from '.';

export function showNotification(
  type: 'error' | 'info' | 'warn',
  message: string,
): void {
  notification[type as keyof typeof notification]({
    message: capitalizeFirstLetter(message),
    placement: 'top',
    duration: 2,
  });
}

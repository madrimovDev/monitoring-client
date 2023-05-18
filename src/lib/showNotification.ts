import {notification} from 'antd';
import {capitalizeFirstLetter} from '.';

type NotifyKeyType = 'info' | 'success' | 'warning' | 'error';

export function showNotification(type: NotifyKeyType, message: string): void {
  notification[type]({
    message: capitalizeFirstLetter(message),
    placement: 'topRight',
    duration: 5
  });
}

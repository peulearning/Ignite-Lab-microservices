import { Content } from '@applications/entidades/content';
import {
  Notification,
  NotificationProps,
} from '@applications/entidades/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação'),
    recipientId: 'recipient-1',
    ...override,
  });
}

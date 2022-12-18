import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notifications-not-found';
import { makeNotification } from '../../../test/factories/notification-factory';
import { UnreadNotification } from './unread-notification';

describe('Read Notification', () => {
  it('should be able to unread a notification', async () => {
    const NotificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(NotificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await NotificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(NotificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const NotificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(NotificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});

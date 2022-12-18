import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notifications';
import { NotificationNotFound } from './errors/notifications-not-found';
import { makeNotification } from '../../../test/factories/notification-factory';

describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async () => {
    const NotificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(NotificationsRepository);

    const notification = makeNotification();

    await NotificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(NotificationsRepository.notifications[0].calceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const NotificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(NotificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});

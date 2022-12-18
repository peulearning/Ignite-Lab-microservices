import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able toc count recipient notification', async () => {
    const NotificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      NotificationsRepository,
    );

    await NotificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await NotificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await NotificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});

import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to get recipient notification', async () => {
    const NotificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});

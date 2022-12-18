import { CancelNotification } from '@applications/use-cases/cancel-notifications';
import { CountRecipientNotifications } from '@applications/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@applications/use-cases/get-recipient-notifications';
import { ReadNotification } from '@applications/use-cases/read-notifications';
import { UnreadNotification } from '@applications/use-cases/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/applications/use-cases/send-notification';
import { DataBaseModule } from '../database/data.base.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}

import { Module } from '@nestjs/common';
import { DataBaseModule } from './infra/database/data.base.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DataBaseModule],
})
export class AppModule {}

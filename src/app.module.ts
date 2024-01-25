import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { DriverModule } from './driver/driver.module';
import { ServiceModule } from './service/service.module';
import { RatingModule } from './rating/rating.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [ClientModule, DriverModule, ServiceModule, RatingModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

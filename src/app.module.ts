import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChargeModule } from './charge/charge.module';
import { DriverModule } from './driver/driver.module';
import { ServiceModule } from './service/service.module';
import { RatingModule } from './rating/rating.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [ChargeModule, DriverModule, ServiceModule, RatingModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

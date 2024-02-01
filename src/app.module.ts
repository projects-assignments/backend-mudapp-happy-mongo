import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ChargeModule } from './charge/charge.module';
// import { DriverModule } from './driver/driver.module';
// import { ServiceModule } from './service/service.module';
// import { RatingModule } from './rating/rating.module';
// import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // ChargeModule,
    // DriverModule,
    // ServiceModule,
    // RatingModule,
    // MessagesModule,
    AuthModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://correofrg:felix@book-api.nbz0kit.mongodb.net/mudapp2',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

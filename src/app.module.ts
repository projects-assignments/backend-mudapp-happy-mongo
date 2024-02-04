import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { ServiceModule } from './service/service.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    
    DriverModule,
    ServiceModule,
    UserModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://correofrg:felix@book-api.nbz0kit.mongodb.net/mudapp3',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

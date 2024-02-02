import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DriverService } from 'src/driver/driver.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, { name: 'Driver', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService, DriverService],
  exports: [UserService],
})
export class UserModule {}

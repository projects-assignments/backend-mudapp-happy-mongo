import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalEstrategy } from './strategies/local.strategy';


@Module({
 imports:[
  UserModule, 
  PassportModule],
  providers: [AuthService, LocalEstrategy],
  exports:[AuthService]
})
export class AuthModule {}

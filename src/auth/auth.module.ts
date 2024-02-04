import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { LocalEstrategy } from './strategies/local.strategy';
import { JwtModule }  from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
 imports:[
  UserModule, 
  PassportModule,
  JwtModule.register({
    secret: 'MYSECRET',
    signOptions: { expiresIn: '1d' },
  }),],
  providers: [AuthService, LocalEstrategy, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}



// import { Module, forwardRef } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { UserModule } from 'src/user/user.module';
// import { PassportModule } from '@nestjs/passport';
// import { LocalEstrategy } from './strategies/local.strategy';
// import { JwtModule }  from '@nestjs/Jwt';
// import { JwtService } from '@nestjs/jwt';
// import { JwtStrategy } from './strategies/jwt.strategy';

// @Module({
//  imports:[
//   UserModule, 
//   PassportModule,
//   JwtModule.register({
//     secret: process.env.JWT_SECRET,
//     signOptions: { expiresIn: '60s' },
//   }),
//  ],
//   providers: [AuthService, LocalEstrategy, JwtService, JwtStrategy],
//   exports:[AuthService]
// })
// export class AuthModule {}
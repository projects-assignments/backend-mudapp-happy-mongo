import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
// import { Types } from 'mongoose';
// import { Request } from 'express';
// import { User } from './user/schemas/user.schema';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/signin')
  signin(@Req() req: any) {
    return this.authService.signin(req.user);
  }
}

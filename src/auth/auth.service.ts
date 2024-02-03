import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { User } from 'src/user/user_schema/user.schema';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async verifyPassword(password: string, hash: string) {
    return compare(password, hash);
  }
  async validateUser(userEmail: string, pass: string) {
    const user = await this.userService.findOneUser(userEmail);

    console.log(user);

    const passwordsEqual = await compare(pass, user.userPassword);

    if (!passwordsEqual) throw new UnauthorizedException();
    const { userPassword, ...result } = user;
    return result;
  }
  signin(user: User) {
    const payload = { userEmail: user.userEmail, sub: user._id };
    return this.jwtService.sign(payload);
  }
}

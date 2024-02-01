import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtSerice } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private readonly jwtService: JwtService,) { }

    async validateUser(userEmail: string, pass: string) {
        const user = await this.userService.findOneUserEmail(userEmail);

        console.log(user);

        const passwordsEqual = await compare(pass, user.password);

        if (!passwordsEqual) throw new UnauthorizedException();
        const { password, ...result } = user;
        return result;

    }
    signin(user: any) {
        const payload = { usermane: user.userEmail, sub: user._id };
        return this.jwtService.sign(payload);

    }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private readonly jwtService: JwtService) { }
}
async validateUser(userEmail: string, pass: string){
    const user = await this.userService.findOneByUserEmail(userEmail); // ** PUEDE SER QUE SEA USEREMAIL OJO!!!!!!!!! //
    console.log(user)
    const passwordsEqual = await compare(pass, user.password);

    if (!passwordsEqual) throw new UnauthorizedException();
    const { password, ...result } = user;
    return result;

    signin(user: any){
        const payload = { email: user.userEmail, sub: user._id };

        return this.jwtService.sign(payload);
    }


}

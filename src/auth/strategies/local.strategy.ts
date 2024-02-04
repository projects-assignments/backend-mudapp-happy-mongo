import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';


@Injectable()
export class LocalEstrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService) {
        //para poder trabajar con el campo email en la autenitcacion es imprescindible mapear el campo de email super({  usernameField: 'email' });
        super({  usernameField: 'email' });
}
async validate ( email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    console.log (user)
    if (!user) {
        throw new UnauthorizedException('usuario no autorizado - estrategia local');

    }
    return user;
}


}
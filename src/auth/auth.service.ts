import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcrypt';
import { User } from 'src/user/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async validateUser(email: string, pass: string):Promise<Partial<User>>{
        const user = await this.userService.findOneByUseremail(email); 
        // console.log(user)
        const passwordsEqual = await compare(pass, user.password);
    
        if (!passwordsEqual) throw new UnauthorizedException('Acceso no autorizado');
        //por seguridad hacemos una desestructuracion de User para devolver User sin el password
        const { password, ...result } = user;
        return result;
    
        // signin(user: any){
        //     const payload = { email: user.userEmail, sub: user._id };
    
        //     return this.jwtService.sign(payload);
        }

}


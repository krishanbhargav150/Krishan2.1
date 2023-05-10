import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PersonsService } from 'src/persons/persons.service';

@Injectable()
export class AuthService {
    constructor(
        private personsService : PersonsService,
        private jwtService : JwtService
        ){}

    async signIn(personName : string, password : string): Promise<any> {
        const db = await this.personsService.findOne(personName);

        if(db?.password !=  password){
            throw new UnauthorizedException();
        }

    //    const payload = { username: db.personName, sub: db.personId };
    //    return{
    //     access_token : await this.jwtService.signAsync(payload),
    //    };
    }
}

import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private userService : UserService){}

    async validateUser(){

        const user =  await this.userService.findByName(loginDto.name);
       if(user){
        if(user.name == loginDto.name){
            return user;
        }
        

       }
       return null;
    
    }
    }


import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
//import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local/local-auth.guard';
//import { LocalAuthGuard } from './local/local-auth.guard';

@Controller('/auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Body() loginDto : loginDto){
        return this.authService.validateUser();
    }
}

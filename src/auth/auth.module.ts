import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local/local.strategy';

@Module({
    controllers : [AuthController],
    imports : [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy],
    
})
export class AuthModule {}

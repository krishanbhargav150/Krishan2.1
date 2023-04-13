import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/userEntity';

@Module({
    imports : [TypeOrmModule.forFeature([User])],
    controllers : [UserController],
    providers : [UserService],
    exports: [TypeOrmModule, UserService]
})
export class UserModule {}


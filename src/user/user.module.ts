import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/userEntity';
import { PersonsModule } from 'src/persons/persons.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports : [TypeOrmModule.forFeature([User]),PersonsModule,AuthModule],
    controllers : [UserController],
    providers : [UserService],
    exports: [TypeOrmModule, UserService]
})
export class UserModule {}


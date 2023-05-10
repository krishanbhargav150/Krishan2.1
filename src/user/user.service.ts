import { Body, Injectable } from '@nestjs/common';
import { createUserDto } from '../dto/create-user.dto';
import { updateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/userEntity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>) { }


    getUser(): Promise<User[]> {
        return this.UserRepository.find();
    }

    create(createUserDto: createUserDto) {
        return this.UserRepository.save(createUserDto);
    }

    updateUser(userName: string): Promise<User> {
        return this.UserRepository.findOne({ where: { name : userName}});
    }

    // updateUser(updateUserDto: updateUserDto, name: string) {
    //     return this.UserRepository.update(name, updateUserDto);
    // }

    // show(name: string) {
    //     return this.UserRepository.findOne({ where: { name: name } });
    // }

    // findByName(name: string) {
    //     return this.UserRepository.findOne({ where: { name } });
    // }

    deleteUser(userId: number) {
        return this.UserRepository.delete(userId);
    }
}

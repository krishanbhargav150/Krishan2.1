import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from '../dto/create-user.dto';
import { updateUserDto } from '../dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/get')
    getUser() {
        return this.userService.getUser();
    }

    @Post('/create')
    store(@Body() createUserDto: createUserDto) {
        return this.userService.create(createUserDto);
    }

    @Patch(':userId')
    update(
        @Body() updateUserDto: updateUserDto,
        @Param('userId', ParseIntPipe) userId: number) {
        return this.userService.updateUser(updateUserDto, userId);

    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.deleteUser(userId);
    }

    @Get('/:userId')
   async  getApi(@Param('userId', ParseIntPipe) userId: number) {
        return await this.userService.show(userId);
    }


}

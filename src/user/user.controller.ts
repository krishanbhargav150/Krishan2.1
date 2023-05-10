import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from '../dto/create-user.dto';
import { updateUserDto } from '../dto/update-user.dto';
import { User } from 'src/entities/userEntity';
import { AuthGuard } from '@nestjs/passport';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/get')
    getUser() {
        return this.userService.getUser();
    }

    
    @Post('/create')
    store(@Body() createUserDto: createUserDto) {
     this.userService.create(createUserDto);
     return "user created successfully";
    }



    // @Patch(':name')
    // async update(
    //     @Body() updateUserDto: updateUserDto,
    //   // @Body() body : User<updateUserDto>,
    //     @Param('name') name: string) {
    //         const userName = await this.userService.updateUser(updateUserDto, name);

    //         if(newLocal){
    //             throw new BadRequestException("Name does not exists in database!");
       
    //         }
    //         else{
    //             this.userService.updateUser(updateUserDto, name);
    //             return `this ${name} updated successfully`;
    //         }
           

  

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
     this.userService.deleteUser(userId);
     return `this ${userId} has been deleted !!`;
    }

//     @Get('/:userId')
//    async  getApi(@Param('userId', ParseIntPipe) userId: number) {
//         return await this.userService.show(userId);
//     }


}

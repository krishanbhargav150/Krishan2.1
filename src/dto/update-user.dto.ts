import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class updateUserDto {

    @IsNumber()
    age : number;
    
    @IsString()
    @IsNotEmpty()
    name : string;
    
    @IsString()
    post : string;

    @IsString()
    password : string;
}
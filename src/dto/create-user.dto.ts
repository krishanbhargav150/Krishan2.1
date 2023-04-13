import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class createUserDto {

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
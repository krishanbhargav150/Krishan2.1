import { IsString, IsNumber, IsNotEmpty, IsBoolean } from "class-validator";

export class updateUserDto {

    @IsNumber()
    age : number | null;
    
    @IsString()
    @IsNotEmpty()
    name : string;
    
    @IsString()
    post : string | null;

    @IsString()
    password : string;

    @IsBoolean()
    status : boolean;
}
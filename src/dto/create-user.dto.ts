import { IsString, IsNumber, IsNotEmpty, IsBoolean } from "class-validator";

export class createUserDto {

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
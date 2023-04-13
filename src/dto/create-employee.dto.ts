import { IsString, IsNumber, IsBoolean, IsPhoneNumber } from "class-validator";

export class createEmployeeDto {

    @IsString()
    employeeName : string;
    @IsString()
    post : string;
    @IsNumber()
    age : number;
    @IsString()
    currentAddress : string;
    @IsString()
    permanentAddress : string;

    // @IsPhoneNumber()
    // phoneNo : number;

    @IsBoolean()
    status : boolean;

}
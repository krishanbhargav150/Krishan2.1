import { Controller, Post, Get, Body, ParseIntPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { create } from 'domain';
import { createEmployeeDto } from 'src/dto/create-employee.dto';
import { EmbeddedMetadata } from 'typeorm/metadata/EmbeddedMetadata';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService : EmployeeService){ }

    @Post('/create')
    createEmployee(@Body() createEmployeeDto : createEmployeeDto) {
        return this.employeeService.newEmployee(createEmployeeDto);
    }

// still not get over it 
    @Get('/:employeeId')
    getEmployee(@Body('employeeId', ParseIntPipe) employeeId : number){ 
        return this.employeeService.show(employeeId);
    }



}

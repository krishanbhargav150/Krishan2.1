import { Controller, Post, Get, Body, Param, Delete, Patch } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { createEmployeeDto } from 'src/dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService : EmployeeService){ }

    @Post('/create')
    async createEmployee(@Body() createEmployeeDto : createEmployeeDto) {
        await this.employeeService.newEmployee(createEmployeeDto);

        return `Employee added in database`;
    }

    @Get('/:employeeId')
    async getEmployee(@Param('employeeId') employeeId : number){ 
        return await this.employeeService.show(employeeId);
    }

    @Delete('/:employeeId')
    async deleteEmployee(@Param('employeeId') id: number){
        await this.employeeService.deleteEmployee(id);
    }

    @Patch('/update')
    async updateEmployeeData(@Param('employeeId') id: number, @Body() createEmployeeDto: createEmployeeDto){
        await this.employeeService.updateEmployeeData(id, createEmployeeDto);
    }


}

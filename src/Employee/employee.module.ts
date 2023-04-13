import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModule } from 'src/entities/dbConnector';
import { EmployeeMaster } from 'src/entities/employeeEntity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Type } from 'class-transformer';

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeMaster])],
    controllers : [EmployeeController],
    providers : [EmployeeService],
    exports : [TypeOrmModule, EmployeeService]
})
export class EmployeeModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createEmployeeDto } from 'src/dto/create-employee.dto';
import { EmployeeMaster } from 'src/entities/employeeEntity';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(EmployeeMaster)
        private UserRepository: Repository<EmployeeMaster>) { }

    newEmployee(createEmployeeDto : createEmployeeDto){
        return this.UserRepository.save(createEmployeeDto);
    }

    show(employeeId : number){
        return this.UserRepository.findOne({ where : { id : employeeId}});
    }
}

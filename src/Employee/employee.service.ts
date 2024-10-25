import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createEmployeeDto } from 'src/dto/create-employee.dto';
import { EmployeeMaster } from 'src/entities/employeeEntity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeMaster)
    private EmployeeRepository: Repository<EmployeeMaster>,
  ) {}

  async newEmployee(createEmployeeDto: createEmployeeDto) {
    return await this.EmployeeRepository.save(createEmployeeDto);
  }

  async show(employeeId: number) {
    return await this.EmployeeRepository.findOne({ where: { id: employeeId } });
  }

  async deleteEmployee(id: number) {
    return await this.EmployeeRepository.delete({ id });
  }

  async updateEmployeeData(id: number, body: createEmployeeDto) {
    return await this.EmployeeRepository.update({ id }, body);
  }
}

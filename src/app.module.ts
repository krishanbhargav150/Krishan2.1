import { Module } from '@nestjs/common';
import { typeOrmModule } from './entities/dbConnector';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
//import { AuthModule } from './auth/auth.module';

@Module({
  imports: [typeOrmModule, EmployeeModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class AppModule {}

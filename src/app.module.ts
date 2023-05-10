import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { typeOrmModule } from './entities/dbConnector';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { PersonsModule } from './persons/persons.module';



@Module({
  imports: [UserModule, typeOrmModule, EmployeeModule, AuthModule, PersonsModule],
  controllers: [AppController, UserController, EmployeeController],
  providers: [UserService, EmployeeService],
})
export class AppModule { }

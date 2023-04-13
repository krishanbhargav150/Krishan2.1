import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { typeOrmModule } from './entities/dbConnector';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [UserModule, typeOrmModule, EmployeeModule],
  controllers: [AppController, UserController, AuthController, EmployeeController],
  providers: [UserService, AuthService, EmployeeService],
})
export class AppModule { }

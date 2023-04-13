import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './userEntity';
import { EmployeeMaster } from './employeeEntity';


export const typeOrmModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: "root",
  password: "Krishan@150",
  database: "krishan",
  entities: [User, EmployeeMaster],
  synchronize: true,
  logging: true,
});

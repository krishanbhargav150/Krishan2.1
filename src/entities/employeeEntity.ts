import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeMaster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  employeeName: string;

  @Column()
  post: string;

  @Column()
  age: number;

  @Column()
  currentAddress : string;

  @Column()
  permanentAddress : string;

  // @Column()
  // phoneNo : number;

  @Column()
  status : boolean;

}

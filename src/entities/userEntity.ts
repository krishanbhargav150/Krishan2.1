import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  post: string | null;

  @Column()
  age: number | null;

  @Column()
  password : string;

  @Column()
  status : boolean;
}

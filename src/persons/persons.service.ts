import { Injectable } from '@nestjs/common';
import { Db } from 'typeorm';

export type Person = any;

@Injectable()
export class PersonsService {
    private readonly persons = [
        {
            personId : 1,
            personName : 'Krishan',
            password : "Welcome@123"
        },
        {
            personId : 2,
            personName : 'Rahul',
            password : 'Welcome@123'
        },
    ];

    async findOne(personName : string): Promise<Person | undefined> {
        return this.persons.find(person => personName == personName);

    }
}

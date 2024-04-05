import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>){}

   async findAll(): Promise<Employee[]> {
        let employee = new Employee()
        employee.id = '12'
        employee.firstName = 'John'
        employee.lastName = 'Doe'
        employee.designation = 'Software Engineer'
        employee.city = 'New York'

       
        return [employee];
    }
}

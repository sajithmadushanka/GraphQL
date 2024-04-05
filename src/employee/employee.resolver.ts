import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';

@Resolver()
export class EmployeeResolver {

    constructor(private employeeService:EmployeeService){}

    @Query(() => [Employee], { name: 'getAllEmployee' })
    findAll(){
        return this.employeeService.findAll();
    }
}

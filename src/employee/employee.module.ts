import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeResolver } from './employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService, EmployeeResolver],
  controllers: [EmployeeController]
})
export class EmployeeModule {}

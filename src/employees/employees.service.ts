import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeDto } from './interfaces/employee.dto';
import { EmployeesRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: EmployeesRepository,
  ) {}

  async findAll(@Query() queryParams): Promise<Employee[]> {
    return await this.employeesRepository.find(queryParams);
  }

  async findOne(id: number): Promise<Employee> {
    const found = await this.employeesRepository.findOne({ id });

    if (!found) {
      throw new NotFoundException(`Employee with ID "${id} not found"`);
    }

    return found;
  }

  async createEmployee(employeeDto: EmployeeDto): Promise<Employee> {
    const employee = new Employee();
    Object.entries(employeeDto).forEach(([key, value]) => {
      employee[key] = value;
    });

    await employee.save();

    return employee;
    // return await this.employeesRepository.createEmployee(employeeDto);
  }

  async deleteEmployee(id: number): Promise<void> {
    const result = await this.employeesRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException(`Employee with id ${id} was not found`);
    }
  }

  async updateEmployee(employee: Partial<Employee>): Promise<Employee> {
    const oldEmployee = await this.findOne(employee.id);
    Object.entries(employee).forEach(([key, value]: [string, string]) => {
      oldEmployee[key] = value;
    });
    await oldEmployee.save();

    return oldEmployee;
  }
}

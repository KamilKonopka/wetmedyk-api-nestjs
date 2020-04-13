import {EntityRepository, Repository} from "typeorm";
import {Employee} from "./employee.entity";
import {EmployeeDto} from "./interfaces/employee.dto";
import {Query} from "@nestjs/common";
import * as _ from "lodash";

@EntityRepository(Employee)
export class EmployeesRepository extends Repository<Employee> {
    async createEmployee(employeeDto: EmployeeDto): Promise<Employee> {
        const employee = new Employee();
        Object.entries(employeeDto).forEach(([key, value]) => {
            employee[key] = value;
        });
        await employee.save();

        return employee;
    }

    async getEmployees(@Query() queryParams): Promise<Employee[]> {
        const query = this.createQueryBuilder('employee');

        if (!_.isEmpty(queryParams)) {
            Object.entries(queryParams).forEach(([key, value]: [string, string]) => {
                query.andWhere(`employee[${key}] LIKE :${key}`, { [key]: `%${value}` });
            });
        }

        return await query.getMany();
    }
}

import {EntityRepository, Repository} from "typeorm";
import {Employee} from "./employee.entity";
import {EmployeeDto} from "./interfaces/employee.dto";

@EntityRepository(Employee)
export class EmployeesRepository extends Repository<Employee> {
    createEmployee = async (employeeDto: EmployeeDto) => {
        return await this.save(employeeDto);
    }
}

import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Employee} from "./employee.entity";
import {Connection, Repository} from "typeorm";

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee)
        private employeesRepository: Repository<Employee>,
        private connection: Connection,
    ) {}

    findAll(): Promise<Employee[]> {
        return this.employeesRepository.find();
    }

    findOne(id: string): Promise<Employee> {
        return this.employeesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.employeesRepository.delete(id);
    }

    async createMany(employees: Employee[]) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(employees[0]);
            await queryRunner.manager.save(employees[1]);
            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }
    }
}

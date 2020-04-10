import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EmployeeEntity} from "./employee.entity";
import {EmployeesService} from "./employees.service";
import {EmployeesController} from "./employees.controller";

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity])],
    providers: [EmployeesService],
    controllers: [EmployeesController],
})
export class EmployeesModule {}

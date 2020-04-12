import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Employee} from "./employee.entity";
import {EmployeesService} from "./employees.service";
import {EmployeeSubscriber} from "./employee-subscriber";
import {EmployeesController} from "./employees.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Employee])],
    providers: [EmployeesService, EmployeeSubscriber],
    controllers: [EmployeesController],
    exports: [TypeOrmModule]
})
export class EmployeesModule {}

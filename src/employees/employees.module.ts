import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Employee} from "./employee.entity";
import {EmployeesService} from "./employees.service";
import {EmployeeSubscriber} from "./employee-subscriber";
import {EmployeesController} from "./employees.controller";
import {EmployeesRepository} from "./employees.repository";
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
      TypeOrmModule.forFeature([Employee, EmployeesRepository]),
      AuthModule,
    ],
    providers: [EmployeesService, EmployeeSubscriber],
    controllers: [EmployeesController],
    exports: [TypeOrmModule]
})
export class EmployeesModule {}

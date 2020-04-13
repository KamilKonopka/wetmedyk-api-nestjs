import {Module} from "@nestjs/common";
import {LocationsModule} from "./locations.module";
import {LocationsService} from "./locations.service";
import {EmployeesController} from "../employees/employees.controller";

@Module({
    imports: [LocationsModule],
    providers: [LocationsService],
    controllers: [EmployeesController],
})
export class LocationsHttpModule {}

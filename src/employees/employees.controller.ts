import {Controller, Get, Param, Query} from "@nestjs/common";
import {Connection} from "typeorm";
import {EmployeesService} from "./employees.service";
import {Employee} from "./employee.entity";

export interface StringObject {
    [key: string]: string;
}

@Controller('employees')
export class EmployeesController {
    @Get()
    findAll(@Query() queryParams): Promise<Employee[]> {
        return this.employeesService.findAll(queryParams);
    }

    @Get(':ID')
    findOne(@Param() params): Promise<Employee> {
        return this.employeesService.findOne(params.ID);
    }

    constructor(private connection: Connection, private employeesService: EmployeesService) {
    }
}

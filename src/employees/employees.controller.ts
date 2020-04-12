import {Controller, Get, Param} from "@nestjs/common";
import {Connection} from "typeorm";

@Controller('employees')
export class EmployeesController {
    @Get()
    findAll(): Promise<string> {
        return this.connection.query('SELECT * FROM wp_employees')
            .then((res) => res);
    }

    @Get(':ID')
    findOne(@Param() params): string {
        return `this action returns Employee ${params.ID}`;
    }

    constructor(private connection: Connection) {
    }
}

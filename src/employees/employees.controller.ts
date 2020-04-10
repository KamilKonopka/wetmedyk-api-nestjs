import {Controller, Get, Param} from "@nestjs/common";

@Controller('employees')
export class EmployeesController {
    @Get()
    findAll(): string {
        return 'this action returns all employees';
    }

    @Get(':ID')
    findOne(@Param() params): string {
        console.log(params.ID);
        return `this action returns Employee ${params.ID}`;
    }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';
import { EmployeeDto } from './interfaces/employee.dto';

@Controller('employees')
// @UseGuards(AuthGuard())
export class EmployeesController {
  @Get()
  findAll(@Query() queryParams): Promise<Employee[]> {
    return this.employeesService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Employee> {
    return this.employeesService.findOne(id);
  }

  @Post()
  // @UsePipes(ValidationPipe)
  createEmployee(@Body() employeeDto: EmployeeDto): Promise<Employee> {
    return this.employeesService.createEmployee(employeeDto);
  }

  @Delete('/:id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.employeesService.deleteEmployee(id);
  }

  @Patch('/:id')
  updateEmployee(
    @Param('id') id: number,
    @Body() employee: Partial<Employee>,
  ): Promise<Employee> {
    return this.employeesService.updateEmployee(employee);
  }

  constructor(private employeesService: EmployeesService) {}
}

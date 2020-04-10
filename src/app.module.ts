import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";
import {EmployeesModule} from "./employees/employees.module";
import {EmployeeEntity} from "./employees/employee.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "sql.city3studio.nazwa.pl",
    "username": "city3studio_1",
    "database": "city3studio_1",
    "password": "IwonaWasilewska2014",
    "entities": [EmployeeEntity],
    "synchronize": true
  }), EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
  }
}

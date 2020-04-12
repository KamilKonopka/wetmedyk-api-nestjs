import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EmployeesModule} from "./employees/employees.module";
import {Employee} from "./employees/employee.entity";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
        "type": "mysql",
        "host": process.env.DB_HOSTNAME,
        "username": process.env.DB_USER,
        "database": process.env.DB_DATABASE,
        "password": process.env.DB_PASSWORD,
        "entities": [Employee],
        "synchronize": true,
        autoLoadEntities: true,
      }),
      EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

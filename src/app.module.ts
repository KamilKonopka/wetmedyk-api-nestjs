import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EmployeesModule} from "./employees/employees.module";
import {ConfigModule} from "@nestjs/config";
import {development} from "../config/development.config";

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot(development),
      EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

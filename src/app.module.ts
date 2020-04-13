import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {LocationsModule} from "./locations/locations.module";
import {EmployeesModule} from "./employees/employees.module";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          type: "mysql",
          host: process.env.DB_HOSTNAME,
          username: process.env.DB_USER,
          database: process.env.DB_DATABASE,
          password: process.env.DB_PASSWORD,
          entities: ['./**/*.entity.{ts}'],
          synchronize: true,
          autoLoadEntities: true,
      }),
      LocationsModule,
      EmployeesModule,
      AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

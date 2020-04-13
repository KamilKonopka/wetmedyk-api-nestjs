import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    entities: ['./**/*.entity.{ts}'],
    synchronize: true,
    autoLoadEntities: true,
};

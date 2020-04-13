import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const development: TypeOrmModuleOptions = {
    type: "mysql",
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    // entities: [Employee]
    entities: [['./', 'src', '**', '*.entity.ts'].join('/')],
    synchronize: true,
    autoLoadEntities: true,
};

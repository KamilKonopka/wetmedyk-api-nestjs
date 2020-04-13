import {Injectable, Query} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Location} from "./location.entity";
import {Connection, Repository} from "typeorm";

@Injectable()
export class LocationsService {
    constructor(
        @InjectRepository(Location)
        private locationsRepository: Repository<Location>,
        private connection: Connection,
    ) {
    }

    findAll(@Query() queryParams): Promise<Location[]> {
        return this.locationsRepository.find(queryParams);
    }

    async createMany(locations: Location[]) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(locations[0]);
            await queryRunner.manager.save(locations[1]);
            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
        } finally {
            await queryRunner.release();
        }
    }
}

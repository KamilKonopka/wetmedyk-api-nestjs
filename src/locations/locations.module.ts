import {Module} from "@nestjs/common";
import {LocationsController} from "./locations.controller";
import {LocationsService} from "./locations.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Location} from "./location.entity";
import {LocationsRepository} from "./locations.repository";
import {LocationsSubscriber} from "./locations.subscriber";

@Module({
    imports: [TypeOrmModule.forFeature([Location, LocationsRepository])],
    providers: [LocationsService, LocationsSubscriber],
    controllers: [LocationsController],
    exports: [TypeOrmModule],
})
export class LocationsModule {}

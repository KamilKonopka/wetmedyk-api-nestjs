import {EntityRepository, Repository} from "typeorm";
import {Location} from "./location.entity";
import {LocationsDto} from "./interfaces/locations.dto";

@EntityRepository(Location)
export class LocationsRepository extends Repository<Location> {
    createLocation = async (locationDto: LocationsDto) => {
        return await this.save(locationDto);
    }
}

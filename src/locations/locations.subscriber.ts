import {Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent} from "typeorm";
import {Location} from "./location.entity";

@EventSubscriber()
export class LocationsSubscriber implements EntitySubscriberInterface<Location> {
    constructor(connection: Connection) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return Location;
    }

    beforeInsert(event: InsertEvent<Location>) {
        console.log('BEFORE USER INSERTED:', event.entity);
    }
}

import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Employee } from './employee.entity';

@EventSubscriber()
export class EmployeeSubscriber implements EntitySubscriberInterface<Employee> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Employee;
  }

  beforeInsert(event: InsertEvent<Employee>) {
    console.log('BEFORE USER INSERTED:', event.entity);
  }
}

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn() ID: number;

    @Column() first_name: string;

    @Column() last_name: string;

    @Column() description: string;

    @Column() title: string;

    @Column() photo: string;
}

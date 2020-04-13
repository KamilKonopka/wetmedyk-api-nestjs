import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() firstName: string;

    @Column() lastName: string;

    @Column() description: string;

    @Column() title: string;

    @Column() photo: string;
}

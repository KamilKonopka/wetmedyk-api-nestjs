import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location extends BaseEntity {
  @PrimaryGeneratedColumn() ID: number;

  @Column() name: string;

  @Column() address: string;

  @Column() phone: string;

  @Column() openHours: string;

  @Column() mapUrl: string;
}

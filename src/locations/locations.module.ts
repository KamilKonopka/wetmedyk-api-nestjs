import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { LocationsRepository } from './locations.repository';
import { LocationsSubscriber } from './locations.subscriber';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location, LocationsRepository]),
    AuthModule,
  ],
  providers: [LocationsService, LocationsSubscriber],
  controllers: [LocationsController],
  exports: [TypeOrmModule],
})
export class LocationsModule {}

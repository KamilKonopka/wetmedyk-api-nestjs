import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import {LocationsService} from "./locations.service";
import {Location} from "./location.entity";
import { AuthGuard } from '@nestjs/passport';

@Controller('locations')
// @UseGuards(AuthGuard())
export class LocationsController {
    @Get()
    findAll(@Query() queryParams): Promise<Location[]> {
        return this.locationsService.findAll(queryParams);
    }

    @Get(':ID')
    findOne(@Param() params): string {
        return `${params.ID}`;
    }

    constructor(private locationsService: LocationsService) {
    }
}

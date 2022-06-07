/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateVehicleDto, FindVehicleResponseDto, UpdateVehicleDto } from './dto/vehicle.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) { }
    @Get()
    getVehicles(): FindVehicleResponseDto[] {
        return this.vehicleService.getVehicles();
    }

    @Get('/:vehicleId')
    getVehicleTypeById(@Param('vehicleId', new ParseUUIDPipe()) vehicleId: string): FindVehicleResponseDto {
        return this.vehicleService.getVehicleById(vehicleId)
    }

    @Post()
    createVehicleType(@Body() body: CreateVehicleDto) {
        return this.vehicleService.createVehicle(body)
    }

    @Put(':vehicleId')
    updateVehicleType(@Param('vehicleId', new ParseUUIDPipe()) vehicleId: string, @Body() body: UpdateVehicleDto) {
        return this.vehicleService.updateVehicle(body, vehicleId)
    }
}


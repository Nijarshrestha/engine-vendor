import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('vehicles')
export class VehicleController {
    @Get()
    getVehicles() {
        return 'All Vehicles';
    }

    @Get('/:vehicleId')
    getVehicleTypeById() {
        return "Get Vehicle type By Id"
    }

    @Post()
    createVehicleType() {
        return "Create Vehicle Type "
    }

    @Put()
    updateVehicleType() {
        return "Update Vehicle Type by Id"
    }
}


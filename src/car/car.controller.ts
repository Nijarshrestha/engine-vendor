import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('cars')
export class CarController {
    @Get()
    getCars() {
        return 'All Cars';
    }

    @Get('/:carId')
    getCarById(
        @Param('carId') carId: string
    ) {
        return `Get Car with Id of ${carId}`;
    }

    @Post()
    createCarType(
        @Body() body
    ) {
        console.info(body)
        return `Create Car with the following Data ${JSON.stringify(body)}`;
    }

    @Put('/:carId')
    updateCarType(
        @Param('carId') carId: string,
        @Body() body
    ) {
        return `Update Car with Id of ${carId} with Data of ${JSON.stringify(body)}`;
    }
}

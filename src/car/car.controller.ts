/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import {
    CreateCarDto,
    UpdateCarDto,
    FindCarResponseDto,
} from '../car/dto/car.dto';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
    constructor(private readonly carService: CarService) { }
    @Get()
    getCars(): FindCarResponseDto[] {
        return this.carService.getCars();
    }

    @Get('/:carId')
    getCarById(@Param('carId', new ParseUUIDPipe()) carId: string): FindCarResponseDto {
        return this.carService.getCarById(carId);
    }

    @Post()
    createCarType(@Body() body: CreateCarDto) {
        return this.carService.createCar(body)
    }

    @Put('/:carId')
    updateCarType(@Param('carId', new ParseUUIDPipe()) carId: string, @Body() body: UpdateCarDto) {
        return this.carService.updateCar(body, carId)
    }
}

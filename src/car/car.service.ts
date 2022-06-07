/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { cars } from '../db';
import { CreateCarDto, FindCarResponseDto, UpdateCarDto } from './dto/car.dto';

@Injectable()
export class CarService {
    private cars = cars;
    getCars(): FindCarResponseDto[] {
        return this.cars;
    }

    getCarById(carId: string): FindCarResponseDto {
        return this.cars.find(car => {
            return car.id === carId
        })
    }

    createCar(payload: CreateCarDto): FindCarResponseDto {
        const newCar = {
            id: uuid(),
            ...payload
        }
        this.cars.push(newCar);
        return newCar
    }

    updateCar(payload: UpdateCarDto, carId: string) {
        let updatedCar: FindCarResponseDto;
        const updatedCarList = this.cars.map(car => {
            if (car.id === carId) {
                updatedCar = {
                    id: carId,
                    ...payload
                }
                return updatedCar
            }

            else return car
        })

        this.cars = updatedCarList;
        return updatedCar
    }

}

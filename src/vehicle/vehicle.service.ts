/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { vehicle } from 'src/db';
import { CreateVehicleDto, FindVehicleResponseDto, UpdateVehicleDto } from './dto/vehicle.dto';

@Injectable()
export class VehicleService {
    private vehicles = vehicle;
    getVehicles(): FindVehicleResponseDto[] {
        return this.vehicles
    }

    getVehicleById(vehicleId: string): FindVehicleResponseDto {
        return this.vehicles.find(vehicle => {
            return vehicle.id === vehicleId
        })
    }

    createVehicle(payload: CreateVehicleDto): FindVehicleResponseDto {
        const newVehicle = {
            id: uuid(),
            ...payload
        }
        this.vehicles.push(newVehicle);
        return newVehicle
    }

    updateVehicle(payload: UpdateVehicleDto, vehicleId: string) {
        let updatedVehicle: FindVehicleResponseDto;
        const updatedVehicleList = this.vehicles.map(vehicle => {
            if (vehicle.id === vehicleId) {
                updatedVehicle = {
                    id: vehicleId,
                    ...payload
                }
                return updatedVehicle
            }
            else return vehicle
        })
        this.vehicles = updatedVehicleList;
        return updatedVehicle
    }
}

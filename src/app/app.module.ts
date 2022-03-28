import { Module } from '@nestjs/common';
import { VehicleController } from '../vehicle/vehicle.controller';
import { CarController } from '../car/car.controller';

@Module({
  imports: [],
  controllers: [VehicleController, CarController],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }

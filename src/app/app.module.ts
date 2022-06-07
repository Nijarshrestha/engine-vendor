import { Module } from '@nestjs/common';
import { CarModule } from 'src/car/car.module';
import { VehicleModule } from 'src/vehicle/vehicle.module';

@Module({
  imports: [CarModule, VehicleModule],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }

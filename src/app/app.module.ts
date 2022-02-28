import { Module } from '@nestjs/common';
import { VehicleController } from '../vehicle/vehicle.controller';

@Module({
  imports: [],
  controllers: [VehicleController],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }

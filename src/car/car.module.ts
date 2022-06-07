import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common';
import { ValidCarMiddleware } from '../common/middleware/validCar.middleware';
import { CarController } from './car.controller';
import { CarService } from './car.service';

@Module({
    controllers: [CarController],
    providers: [CarService],
})
export class CarModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidCarMiddleware).forRoutes({
            path: 'cars/:carId',
            method: RequestMethod.GET
        });
        consumer.apply(ValidCarMiddleware).forRoutes({
            path: 'cars/:carId',
            method: RequestMethod.PUT
        })
    }
}

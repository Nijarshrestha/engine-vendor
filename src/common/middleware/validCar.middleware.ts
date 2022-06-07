import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { cars } from 'src/db';

@Injectable()
export class ValidCarMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const carId = req.params.carId;
        const carExists = cars.some(car => {
            return car.id === carId
        });
        if (!carExists) {
            throw new HttpException("Car not found", 400)
        }
        next()
    }
}

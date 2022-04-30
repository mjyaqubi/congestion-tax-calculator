import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerModule } from './common/logger/module';
import { ConfigModule } from './common/config/module';
import { CalculateModule } from './calculate/calculate.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { LoggerMiddleware } from './common/logger/middleware';

@Module({
  imports: [ConfigModule, LoggerModule, CalculateModule, VehiclesModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

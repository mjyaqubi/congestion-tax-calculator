import { Module } from '@nestjs/common';
import { ConfigModule } from '../common/config/module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { CalculateController } from './calculate.controller';
import { CalculateService } from './calculate.service';

@Module({
  imports: [ConfigModule, VehiclesModule],
  controllers: [CalculateController],
  providers: [CalculateService],
})
export class CalculateModule {}

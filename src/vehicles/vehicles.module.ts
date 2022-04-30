import { Module } from '@nestjs/common';
import { ConfigModule } from '../common/config/module';
import { VehiclesService } from './vehicles.service';

@Module({
  imports: [ConfigModule],
  providers: [VehiclesService],
  exports: [VehiclesService],
})
export class VehiclesModule {}

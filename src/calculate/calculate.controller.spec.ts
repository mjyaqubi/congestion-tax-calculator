import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '../common/config/module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { CalculateController } from './calculate.controller';
import { CalculateService } from './calculate.service';

describe('CalculateController', () => {
  let calculateController: CalculateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, VehiclesModule],
      controllers: [CalculateController],
      providers: [CalculateService],
    }).compile();

    calculateController = app.get<CalculateController>(CalculateController);
  });

  it('should be defined', () => {
    expect(calculateController).toBeDefined();
  });
});

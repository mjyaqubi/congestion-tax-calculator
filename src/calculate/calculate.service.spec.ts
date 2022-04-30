import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '../common/config/module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { CalculateService } from './calculate.service';

describe('CalculateService', () => {
  let calculateService: CalculateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, VehiclesModule],
      providers: [CalculateService],
    }).compile();

    calculateService = module.get<CalculateService>(CalculateService);
  });

  it('should be defined', () => {
    expect(calculateService).toBeDefined();
  });
});

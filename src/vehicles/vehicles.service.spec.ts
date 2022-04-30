import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '../common/config/module';
import { VehiclesModule } from './vehicles.module';

describe('VehiclesModule', () => {
  let vehiclesModule: VehiclesModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [VehiclesModule],
    }).compile();

    vehiclesModule = module.get<VehiclesModule>(VehiclesModule);
  });

  it('should be defined', () => {
    expect(vehiclesModule).toBeDefined();
  });
});

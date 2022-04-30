import { Injectable } from '@nestjs/common';
import { APP_CONFIGS } from '../common/config/const';
import { ConfigService } from '../common/config/service';

@Injectable()
export class VehiclesService {
  private types;

  constructor(private readonly configService: ConfigService) {
    this.types = new Set(
      this.configService.get<Array<string>>(APP_CONFIGS.VEHICLES_TYPES),
    );
  }

  public isValid(vehicle: string): boolean {
    return vehicle !== null && this.types.has(vehicle);
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { Moment } from 'moment';
import { APP_CONFIGS } from '../common/config/const';
import { ConfigService } from '../common/config/service';
import { VehiclesService } from '../vehicles/vehicles.service';
import {
  CalculateTaxRequest,
  CalculateTaxResponse,
  Rule,
} from './calculate.type';

@Injectable()
export class CalculateService {
  private rules: Record<string, Rule> = {};
  private publicHolidays: Set<string>;

  constructor(
    private readonly configService: ConfigService,
    private readonly vehiclesService: VehiclesService,
  ) {
    this.publicHolidays = new Set(
      this.configService.get<Array<string>>(APP_CONFIGS.PUBLIC_HOLIDAYS),
    );

    const allRules = this.configService.get<Array<Rule>>(APP_CONFIGS.RULES);
    for (let rule of allRules) {
      this.rules[rule.city] = rule;
    }
  }

  public calculateTax(request: CalculateTaxRequest): CalculateTaxResponse {
    const vehicleType = request.vehicle;
    if (!this.vehiclesService.isValid(vehicleType)) {
      throw new BadRequestException('Bad request');
    }

    if (!this.isValidCity(request.city)) {
      throw new BadRequestException('Bad request');
    }

    if (this.isTollFreeVehicle(request.city, request.vehicle)) {
      return { tax: 0 };
    }

    const totalFees = {};
    for (let time of request.times) {
      const date = moment(time);

      if (!this.isTollFeeDay(request.city, date)) {
        for (let rule of this.rules[request.city].fees) {
          if (this.isTimeBetween(rule.start, rule.end, date.format('HH:mm'))) {
            const dateKey = date.format('YYYY-MM-DD');
            totalFees[dateKey] = totalFees[dateKey]
              ? totalFees[dateKey] + rule.fee
              : rule.fee;
          }
        }
      }
    }

    let totalFee = 0;
    for (let key in totalFees) {
      totalFee +=
        this.rules[request.city].maxFeePerDay < totalFees[key]
          ? this.rules[request.city].maxFeePerDay
          : totalFees[key];
    }

    return { tax: totalFee };
  }

  private isValidCity(city: string): boolean {
    return city !== null && this.rules.hasOwnProperty(city);
  }

  private isTollFreeVehicle(city: string, vehicle: string): boolean {
    if (
      this.rules.hasOwnProperty(city) &&
      this.rules[city].tollFreeVehicles.includes(vehicle)
    ) {
      return true;
    }
  }

  private isTollFeeDay(city: string, date: Moment): boolean {
    return (
      this.isTollFreeMonth(city, date) ||
      this.isTollFreePublicHoliday(city, date) ||
      this.isTollFreeWeekend(city, date)
    );
  }

  private isTollFreeMonth(city: string, date: Moment): boolean {
    return this.rules[city].freeMonths.includes(date.month());
  }

  private isTollFreeWeekend(city: string, date: Moment): boolean {
    return (
      this.rules[city].tollFreeWeekends && [6, 7].includes(date.isoWeekday())
    );
  }

  private isTollFreePublicHoliday(city: string, date: Moment): boolean {
    const nextDay = moment(date);
    return (
      this.publicHolidays.has(date.format('YYYY-MM-DD')) ||
      (this.rules[city]?.tollFreeDayBeforePublicHolidays &&
        this.publicHolidays.has(nextDay.add(1, 'day').format('YYYY-MM-DD')))
    );
  }

  private isTimeBetween(
    startTime: string,
    endTime: string,
    targetTime,
  ): boolean {
    const parsedStartTime = this.parseTime(startTime);
    const parsedEndTime = this.parseTime(endTime);
    const parsedTargetTime = this.parseTime(targetTime);

    return (
      parsedTargetTime.hour >= parsedStartTime.hour &&
      parsedTargetTime.hour <= parsedEndTime.hour &&
      parsedTargetTime.mintue >= parsedStartTime.mintue &&
      parsedTargetTime.mintue <= parsedEndTime.mintue
    );
  }

  private parseTime(time: string) {
    const parsed = time.trim().split(':');
    return {
      hour: parseInt(parsed[0], 10),
      mintue: parseInt(parsed[1], 10),
    };
  }
}

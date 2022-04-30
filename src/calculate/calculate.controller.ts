import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import * as ResponseDecorator from '../common/response/decorator';
import {
  CalculateTaxRequestDto,
  CalculateTaxResponseDto,
} from './calculate.dto';
import { CalculateService } from './calculate.service';

@Controller('calculate')
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({
    operationId: 'calculate',
    summary: 'Calculate',
    description: 'Congestion Tax Calculation',
  })
  @ResponseDecorator.Successful(CalculateTaxResponseDto)
  @ResponseDecorator.BadRequest()
  @ResponseDecorator.Unauthorized()
  @ResponseDecorator.InternalServerError()
  @ResponseDecorator.BadGateway()
  async getTax(
    @Body() body: CalculateTaxRequestDto,
  ): Promise<CalculateTaxResponseDto> {
    return this.calculateService.calculateTax(body);
  }
}

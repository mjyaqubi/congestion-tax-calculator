import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CalculateTaxRequest, CalculateTaxResponse } from './calculate.type';

export class CalculateTaxRequestDto implements CalculateTaxRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    example: 'Gothenburg',
  })
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    example: 'Car',
  })
  vehicle: string;

  @IsArray()
  @ApiProperty({
    type: 'string',
    isArray: true,
    example: [
      '2013-01-14 21:00:00',
      '2013-01-15 21:00:00',
      '2013-02-07 06:23:27',
      '2013-02-07 15:27:00',
    ],
  })
  times: string[];
}

export class CalculateTaxResponseDto implements CalculateTaxResponse {
  @ApiProperty({
    type: 'number',
    example: '100',
  })
  tax: number;
}

export type Fees = {
  start: string;
  end: string;
  fee: number;
};

export type Rule = {
  city: string;
  tollFreeVehicles: string[];
  tollFreeDayBeforePublicHolidays: boolean;
  tollFreeWeekends: boolean;
  maxFeePerDay: number;
  freeMonths: number[];
  fees: Fees[];
};

export type CalculateTaxRequest = {
  city: string;
  vehicle: string;
  times: string[];
};

export type CalculateTaxResponse = {
  tax: number;
};

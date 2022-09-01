export interface DadosVeiculo {
  id: number | string;
  vin: string;
  odometer: number | string;
  tirePressure: Array<number> | string;
  status: string;
  batteryStatus: string;
  fuelLevel: number | string;
  lat: number | string;
  long: number | string;
}

export interface DadosVeiculos extends Array<DadosVeiculo> {}

export interface DadosAPIVeiculos {
  vehicleData: DadosVeiculos;
}

export class CreateServiceDto {
  priceService: number;
  pickupAddress: string;
  deliveryAddress: string;
  passengers: number;
  extraServices: {
    assistant: number;
    wheelbarrow: number;
  };
  paymentStatus: {
    standBy: boolean;
    cancelled: boolean;
  };
  statusServie: {
    confirmed: boolean;
    inProgress: boolean;
    cancelled: boolean;
    finalized: boolean;
  };
}

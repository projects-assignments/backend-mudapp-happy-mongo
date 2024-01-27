export class CreateDriverDto {
    driverName: string;
    driverLastName: string;
    driverEmail: string;
    driverAvailable: boolean;
    vehicle: [{ truck: boolean, capacity: string }, { van: boolean, capacity: string }, { car: boolean, capacity: string }];
    zones: [Barcelona: boolean];
    fees: [truck: boolean, van: boolean, car: boolean, xtras: { assistant: number, wheelbarrow: number }];
    collectMethods: { cardHolder: string, iban: string }
}

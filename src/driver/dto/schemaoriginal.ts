export class SchemaGeneral {
    driverId: string;
    driverName: string;
    driverLastName: string;
    driverEmail: string;
    driverAvailable: boolean;
    vehicle: [
        { truck: boolean; capacity: string },
        { van: boolean; capacity: string },
        { car: boolean; capacity: string },
    ];
    zones: { Barcelona: boolean };
    xtras: { assistant: number; wheelbarrow: number };
    collectMethods: { cardHolder: string; iban: string };
    averageRating: number;
}
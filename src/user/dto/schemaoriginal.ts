export class SchemaGeneral {
    id: string;
    name: string;
    lastName: string;
    role: {
        admin: boolean;
        user: boolean;
        driver: boolean;
      };
      address: {
        street: string;
        streetNumber: number;
        city: string;
        postalCode: number;
      };
    email: string;
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
    password: string;
}
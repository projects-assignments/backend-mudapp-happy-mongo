export class CreateUserDto {
  role: {
    admin: boolean;
    user: boolean;
    driver: boolean;
  };
  userName: string;
  userLastName: string;
  address: {
    street: string;
    streetNumber: number;
    city: string;
    postalCode: number;
  };
  userEmail: string;
  dni: string;
  userPassword: string;
}

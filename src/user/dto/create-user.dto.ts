import { PartialType } from "@nestjs/mapped-types";
import { SchemaGeneral } from "src/driver/dto/schemaoriginal";

export class CreateUserDto extends PartialType(SchemaGeneral) { }
// {
//   userId: string;
//   role: {
//     admin: boolean;
//     user: boolean;
//     driver: boolean;
//   };
//   userName: string;
//   userLastName: string;
//   address: {
//     street: string;
//     streetNumber: number;
//     city: string;
//     postalCode: number;
//   };
//   userEmail: string;
//   userPassword: string;
// }

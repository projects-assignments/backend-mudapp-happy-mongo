import { PartialType } from "@nestjs/mapped-types";
import { SchemaGeneral } from "../dto/schemaoriginal";

export class CreateUserDto extends PartialType(SchemaGeneral) { }


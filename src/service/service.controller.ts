import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  Query,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) { }

  @Post('/create')
  async createService(@Res() res, @Body() createServiceDto: CreateServiceDto) {
    const serviceCreated = await this.serviceService.createService(createServiceDto);
    console.log(createServiceDto);
    return res.status(HttpStatus.OK).json({
      message: 'The service has been created',
      serviceCreated,
    });
  }
}
// @Post()
// create(@Body() createServiceDto: CreateServiceDto) {
//   return this.serviceService.create(createServiceDto);
// }

// @Get()
// findAll() {
//   return this.serviceService.findAll();
// }

// @Get(':id')
// findOne(@Param('id') id: string) {
//   return this.serviceService.findOne(+id);
// }

// @Patch(':id')
// update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
//   return this.serviceService.update(+id, updateServiceDto);
// }

// @Delete(':id')
// remove(@Param('id') id: string) {
//   return this.serviceService.remove(+id);
// }

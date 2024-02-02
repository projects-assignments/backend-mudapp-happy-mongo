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

  // @Post('/create/:id')
  // async createService(@Res() res,@Param('id') @Body() createServiceDto: CreateServiceDto) {
  //   const serviceCreated = await this.serviceService.createService(createServiceDto);
  //   console.log(createServiceDto);
  //   return res.status(HttpStatus.OK).json({
  //     message: 'The service has been created',
  //     serviceCreated,
  //   });
  // }


  @Post('/create')
  async createService(@Res() res, @Body() createServiceDto: CreateServiceDto) {
    const serviceCreated = await this.serviceService.createService(createServiceDto);
    console.log(createServiceDto);
    return res.status(HttpStatus.OK).json({
      message: 'The service has been created',
      serviceCreated,
    });
  }


  @Get('/')
  async findAllServices(@Res() res) {
    const allServices = await this.serviceService.findAllServices();
    res.status(HttpStatus.OK).json({
      message: 'Service found complete',
      allServices,
    });
  }

  @Get(':email')
  async findOneService(@Res() res, @Param('email') email: string) {
    const findOneService = await this.serviceService.findOneService(email);
    console.log(findOneService)
    res.status(HttpStatus.OK).json({
      message: 'The service has been found',
      findOneService
    });
  }

  @Patch(':id')
  async updatePartiallyService(@Res() res, @Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    const PartiallyService = this.serviceService.updatePartiallyService(id, updateServiceDto);
    res.status(HttpStatus.OK).json({
      Message: 'The service has been update succesfully',
      PartiallyService
    })
  }
  @Put('/update')
  async updateService(
    @Res() response,
    @Body() createServiceDto: CreateServiceDto,
    @Query('id') id: string,
  ) {
    const updatedService = await this.serviceService.updateService(id, createServiceDto);
    if (!updatedService) throw new NotFoundException('The user does not exist');
    return response.status(HttpStatus.OK).json({
      message: 'User Updated Succesfully',
      updatedService,
    });
  }
  @Delete(':id')
  async deleteService(@Res() res, @Param('id') id: string) {
    const serviceDeleted = await this.serviceService.deleteService(id);
    console.log(id);
    if (!serviceDeleted) throw new NotFoundException('The service does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'The service has been deleted succesfully',
      serviceDeleted,
    });
  }
}
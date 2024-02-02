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
  NotFoundException,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';


@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) { }


  @Post('')
  async createUser(@Res() response, @Body() createUserDto: CreateDriverDto, @Body() createDriverDto: CreateDriverDto) {
    const driverCreated = await this.driverService.createDriver(createDriverDto);
    return response.status(HttpStatus.OK).json({
      message1: 'The driver has been created',
      driverCreated
    });
  }

  @Get('')
  findAllService(@Res() response) {
    const AllDriver = this.driverService.findAllDriver();
    response.status(HttpStatus.OK).json({
      message: 'the drivers are:',
      AllDriver
    })
  }

  @Get(':id')
  async findOneDriver(@Res() response, @Param('id') id: string) {
    const findOneDriver = await this.driverService.findOneDriver(id);
    if (!findOneDriver) throw new NotFoundException('Driver does not exist')
    response.status(HttpStatus.OK).json({
      message: "your driver is:",
      findOneDriver
    })
  }
  @Patch(':id')
  async updateDriver(@Res() response, @Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    const updateDriver = await this.driverService.updateDriver(id, updateDriverDto);
    const findOneDriver = await this.driverService.findOneDriver(id);
    return response.status(HttpStatus.OK).json({
      message1: "lo que quieres cambiar en el driver es esto:",
      updateDriverDto,
      message2: "El driver a modificar es:",
      updateDriver,
      message3: "el driver actualizado queda así:",
      findOneDriver,
    })
  }
  
  @Delete(':id')
  async deleteDriver(@Res() res, @Param('id') id: string) {
    const driverDeleted = await this.driverService.deleteDriver(id);
    console.log(id);
    if (!driverDeleted) throw new NotFoundException('The driver does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'The driver has been deleted succesfully',
      driverDeleted,
    });
  }
  
}

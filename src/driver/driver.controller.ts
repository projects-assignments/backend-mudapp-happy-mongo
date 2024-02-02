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


  @Post('/create')
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}





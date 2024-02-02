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

  @Get()
  findAll() {
    return this.driverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(+id, updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}





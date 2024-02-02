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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateDriverDto } from 'src/driver/dto/create-driver.dto';
import { DriverService } from 'src/driver/driver.service';
// import { response } from 'express';
// import { log } from 'console';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly driverService: DriverService) { }

  // @Post('/create')
  // async createUser(@Res() response, @Body() createUserDto: CreateUserDto) {
  //   const userCreated = await this.userService.createUser(createUserDto);
  //   console.log(createUserDto);
  //   return response.status(HttpStatus.OK).json({
  //     message: 'The user has been created',
  //     userCreated,
  //   });
//   // }


// en realidad tendrian que crearse los dos metodos
  @Post('/create')
  async createUser(@Res() response, @Body() createUserDto: CreateUserDto, @Body() createDriverDto: CreateDriverDto) {
    const userCreated = await this.userService.createUser(createUserDto);
    // const driverCreated = await this.driverService.createDriver(createDriverDto);
    return response.status(HttpStatus.OK).json({
      message: 'The user has been created',
      userCreated,
      // message1: 'The driver has been created',
      // driverCreated
    });
  }

  @Get('/')
  findAllUsers(@Res() response) {
    const allUsers = this.userService.findAll();
    response.status(HttpStatus.OK).json({
      allUsers,
    });
  }

  @Get(':id')
  async findOneUser(@Res() response, @Param('id') id: string) {
    const findOneUser = await this.userService.findOneUser(id);
    response.status(HttpStatus.OK).json(findOneUser);
    return this.userService.findOneUser(id);
  }

  @Patch(':id')
  async updatePartiallyUser(
    @Res() response,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const updatePartiallyUser = await this.userService.updatePartiallyUser(
      id,
      updateUserDto,
    );
    return response.status(HttpStatus.OK).json({
      message: 'The user has been update succesfully',
      updatePartiallyUser,
    });
  }

  @Delete(':id')
  async deleteUser(@Res() response, @Param('id') id: string) {
    const userDeleted = await this.userService.deleteUser(id);
    console.log(id);
    if (!userDeleted) throw new NotFoundException('The user does not exist');
    return response.status(HttpStatus.OK).json({
      message: 'The user has been deleted succesfully',
      userDeleted,
    });
  }
  // http://localhost:5000/user/update?id=65b62e96ac3ecb16fcb58346//Esta es la forma para poner el parametro id en la Query Http... Si ponemos la ruta update en  decorador Pur "@Put('/update')" hay que usar el decorador @Query('id').
  @Put('/update')
  async updateUser(
    @Res() response,
    @Body() createUserDto: CreateUserDto,
    @Query('id') id: string,
  ) {
    const updatedUser = await this.userService.updateUser(id, createUserDto);
    if (!updatedUser) throw new NotFoundException('The user does not exist');
    return response.status(HttpStatus.OK).json({
      message: 'User Updated Succesfully',
      updatedUser,
    });
  }
}

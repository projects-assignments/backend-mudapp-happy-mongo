import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Query, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { response } from 'express';
import { log } from 'console';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/create')
  async createUser(@Res() response, @Body() createUserDto: CreateUserDto) {
    const userCreated = await this.userService.createUser(createUserDto);
    console.log(createUserDto)
    return response.status(HttpStatus.OK).json({
      message: "The user has been created",
      userCreated
    })
  }
  //   @Post('/create')
  //   async createUser(@Res() res, @Body() createUserDto: CreateUserDto) {
  //     try {
  //       const userCreated = await this.userService.createUser(createUserDto);
  //       console.log(createUserDto); // Asegúrate de que createUserDto esté definido y tenga los datos correctos
  //       return res.status(HttpStatus.OK).json({
  //         message: 'The user has been created',
  //         userCreated,
  //       });
  //     } catch (error) {
  //       console.error('Error creating user:', error);
  //       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
  //         message: 'An error occurred while creating the user',
  //         error: error.message,
  //       });
  //     }
  //   }
  // }


  @Get('/')
  findAllUsers(@Res()response) {
   const allUsers = this.userService.findAll();
   response.status(HttpStatus.OK).json({
    allUsers
   })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Res() response, @Param('id') id: string) {
    const userDeleted = await this.userService.deleteUser(id);
    console.log(id)
    if(!userDeleted) throw new NotFoundException('The user does not exists');
    return response.status(HttpStatus.OK).json({
      message:'The user has been deleted succesfully',
      userDeleted
    })
  }
}

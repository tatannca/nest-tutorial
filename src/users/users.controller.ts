import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    // return { name: createUser.username };
    return this.usersService.create(createUser);
  }
}

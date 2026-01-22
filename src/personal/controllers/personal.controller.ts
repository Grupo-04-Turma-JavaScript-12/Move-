import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Personal } from '../entities/personal.entity';
import { PersonalService } from './../services/personal.service';

@Controller('/personais')
export class PersonalController {
  constructor(private readonly PersonalService: PersonalService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Personal[]> {
    return this.PersonalService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Personal> {
    return this.PersonalService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByNome(@Param('nome') nome: string): Promise<Personal[]> {
    return this.PersonalService.findAllByNome(nome);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() personal: Personal): Promise<Personal> {
    return this.PersonalService.create(personal);
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() personal: Personal): Promise<Personal> {
    return this.PersonalService.update(personal);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.PersonalService.delete(id);
  }
}

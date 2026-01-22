import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Personal } from '../entities/personal.entity';
import { PersonalService } from './../services/personal.service';

@Controller('/personais')
export class PersonalController {
  constructor(private readonly PersonalService: PersonalService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Personal> {
    return this.PersonalService.findAll();
  }
}

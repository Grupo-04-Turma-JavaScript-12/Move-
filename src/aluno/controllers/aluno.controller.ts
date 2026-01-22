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
import { Aluno } from '../entities/aluno.entity';
import { AlunoService } from '../services/aluno.service';

@Controller('/alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Aluno[]> {
    return this.alunoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Aluno> {
    return this.alunoService.findById(id);
  }

  @Get(':id/imc')
  calcIMC(@Param('id', ParseIntPipe) id: number): Promise<Aluno> {
    return this.alunoService.calcIMC(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.create(aluno);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.update(aluno);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.alunoService.delete(id);
  }
}

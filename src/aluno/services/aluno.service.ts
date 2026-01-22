import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { CategoriaService } from '../../categoria/services/categoria.service';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private alunoRepository: Repository<Aluno>,
    private categoriaService: CategoriaService,
  ) {}

  async findAll(): Promise<Aluno[]> {
    return await this.alunoRepository.find({
      relations: {
        categoria: true,
        personal: true,
      },
    });
  }

  async findById(id: number): Promise<Aluno> {
    const aluno = await this.alunoRepository.findOne({
      where: {
        id,
      },
      relations: {
        categoria: true,
        personal: true,
      },
    });
    if (!aluno) {
      throw new HttpException('Aluno não encontrado!', HttpStatus.NOT_FOUND);
    }
    return aluno;
  }

  async calcIMC(id: number): Promise<Aluno & { imc: number }> {
    const aluno = await this.alunoRepository.findOneBy({ id });

    if (!aluno) throw new NotFoundException('Aluno não encontrado!');

    const imc = aluno.peso / (aluno.altura * aluno.altura);

    return {
      ...aluno,
      imc: imc,
    };
  }

  async create(aluno: Aluno): Promise<Aluno> {
    await this.categoriaService.findById(aluno.categoria.id);
    return await this.alunoRepository.save(aluno);
  }

  async update(aluno: Aluno): Promise<Aluno> {
    await this.findById(aluno.id);

    await this.categoriaService.findById(aluno.categoria.id);

    return await this.alunoRepository.save(aluno);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.alunoRepository.delete(id);
  }
}

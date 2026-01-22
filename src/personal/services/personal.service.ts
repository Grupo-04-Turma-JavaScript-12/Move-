import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Personal } from '../entities/personal.entity';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(Personal)
    private personalRepository: Repository<Personal>,
  ) {}

  async findAll(): Promise<Personal[]> {
    return await this.personalRepository.find();
  }

  async findById(id: number): Promise<Personal> {
    const personal = await this.personalRepository.findOne({
      where: {
        id,
      },
    });

    if (!personal)
      throw new HttpException('Personal não encontrado!', HttpStatus.NOT_FOUND);

    return personal;
  }

  async findAllByNome(nome: string): Promise<Personal[]> {
    return await this.personalRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(personal: Personal): Promise<Personal> {
    return await this.personalRepository.save(personal);
  }
  async update(personal: Personal): Promise<Personal> {
    await this.findById(personal.id);

    return await this.personalRepository.save(personal);
  }
  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.personalRepository.delete(id);
  }
}

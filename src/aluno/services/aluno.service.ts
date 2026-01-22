import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Aluno } from "../entities/aluno.entity";
import { DeleteResult, Repository } from 'typeorm';


@Injectable()
export class AlunoService {
    constructor(
        @InjectRepository(Aluno)
        private alunoRepository: Repository<Aluno>
    ) {}

    async findAll(): Promise<Aluno[]> {
        return await this.alunoRepository.find()
    }

    async findById(id: number): Promise<Aluno> {
        const aluno = await this.alunoRepository.findOne({
            where: {
                id,
            }
        })
        if (!aluno){
            throw new HttpException('Aluno não encontrado!', HttpStatus.NOT_FOUND);
        }
        return aluno;
    }

    async create(aluno: Aluno): Promise<Aluno> {
        return await this.alunoRepository.save(aluno);
    }

    async update(aluno: Aluno): Promise<Aluno> {
        await this.findById(aluno.id)
        return await this.alunoRepository.save(aluno);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id)
        return await this.alunoRepository.delete(id);
    }
}


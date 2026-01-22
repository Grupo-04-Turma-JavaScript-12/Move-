import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../categoria/categoria.module';
import { PersonalModule } from '../personal/personal.module';
import { AlunoController } from './controllers/aluno.controller';
import { Aluno } from './entities/aluno.entity';
import { AlunoService } from './services/aluno.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno]), CategoriaModule, PersonalModule],
  providers: [AlunoService],
  controllers: [AlunoController],
  exports: [],
})
export class AlunoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoModule } from './aluno/aluno.module';
import { Aluno } from './aluno/entities/aluno.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Personal } from './personal/entities/personal.entity';
import { PersonalModule } from './personal/personal.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_move',
      entities: [Categoria, Aluno, Personal],
      synchronize: true,
    }),
    CategoriaModule,
    AlunoModule,
    PersonalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

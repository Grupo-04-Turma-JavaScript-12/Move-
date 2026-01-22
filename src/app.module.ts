import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoModule } from './aluno/aluno.module';
import { Aluno } from './aluno/entities/aluno.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_move',
      entities: [Aluno],
      synchronize: true,
    }),
    AlunoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

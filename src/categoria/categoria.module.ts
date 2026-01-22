import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [],
  controllers: [],
  exports: [],
})
export class CategoriaModule {}

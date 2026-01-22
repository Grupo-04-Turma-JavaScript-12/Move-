import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      entities: [Personal],
      synchronize: true,
    }),
    PersonalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

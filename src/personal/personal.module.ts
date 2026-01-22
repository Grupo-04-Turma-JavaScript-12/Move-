import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalController } from './controllers/personal.controller';
import { Personal } from './entities/personal.entity';
import { PersonalService } from './services/personal.service';

@Module({
  imports: [TypeOrmModule.forFeature([Personal])],
  providers: [PersonalService],
  controllers: [PersonalController],
  exports: [PersonalService],
})
export class PersonalModule {}

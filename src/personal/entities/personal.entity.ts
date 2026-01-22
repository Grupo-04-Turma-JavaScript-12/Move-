import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Aluno } from '../../aluno/entities/aluno.entity';

@Entity({ name: 'tb_personais' })
export class Personal {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 100, nullable: false })
  usuario: string;

  @Column({ length: 5000 })
  foto: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @OneToMany(() => Aluno, (aluno) => aluno.personal)
  aluno: Aluno[];
}

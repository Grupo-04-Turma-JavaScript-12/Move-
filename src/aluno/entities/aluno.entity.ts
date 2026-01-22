import { IsMobilePhone, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_alunos' })
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @IsMobilePhone('pt-BR')
  @Column()
  telefone: string;

  @IsNotEmpty()
  // @isPositive()
  @Column('decimal', { precision: 5, scale: 2, nullable: false })
  altura: number;

  @IsNotEmpty()
  // @isPositive()
  @Column('decimal', { precision: 5, scale: 2, nullable: false })
  peso: number;

  // @ManyToOne(() => Categoria, (aluno) => categoria.aluno, {
  //   onDelete: 'CASCADE',
  // })
  // tema: Categoria;

  // @ManyToOne(() => Personal, (personal) => personal.aluno, {
  //   onDelete: 'CASCADE',
  // })
  // usuario: Personal;
}

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  descricao: string;

  @Column({ default: false})
  realizado: boolean;

  @Column()
  created: Date;
}
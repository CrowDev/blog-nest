import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  publicationDate: Date;

  @Column({ default: false })
  deleted: boolean;
}

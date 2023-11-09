import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Blog')
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  publicationDate: Date;

  @Column({ default: false })
  deleted: boolean;
}

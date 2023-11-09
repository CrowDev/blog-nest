import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { BlogEntity } from './Blog.entity';

@Entity('Comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  publicationDate: Date;

  @Column({ default: false })
  deleted: boolean;

  @ManyToOne(() => BlogEntity, (blog) => blog.comments)
  blog: BlogEntity;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { CategoryEntity } from './Category.entity';
import { CommentEntity } from './Comment.entity';

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

  @ManyToMany(() => CategoryEntity)
  @JoinTable()
  categories: CategoryEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.blog)
  comments: CommentEntity[];
}

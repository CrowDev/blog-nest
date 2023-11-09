import { CategoryEntity } from 'src/entities/Category.entity';

export class BlogDto {
  id: number;
  title: string;
  body: string;
  publicationDate: Date;
  categories: CategoryEntity[];
}

export class CreateBlogDto {
  title: string;
  body: string;
  publicationDate: Date;
  categories: CategoryEntity[];
}

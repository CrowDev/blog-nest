import { CategoryEntity } from 'src/entities/Category.entity';
import { CategoryDto } from '../../categories/dto/CategoriesDto.dto';

export class BlogDto {
  id: number;
  title: string;
  body: string;
  publicationDate: Date;
  categories: CategoryDto[];
}

export class CreateBlogDto {
  title: string;
  body: string;
  publicationDate: Date;
  categories: CategoryEntity[];
}

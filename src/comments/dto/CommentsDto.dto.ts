import { BlogDto } from '@/blogs/dto/BlogsDto.dto';

export class CommentDto {
  id: number;
  comment: string;
  publicationDate: Date;
  blog: BlogDto;
}

export class CreateComentDto {
  comment: string;
  blog: BlogDto;
}

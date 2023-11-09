export class BlogDto {
  id: number;
  title: string;
  body: string;
  publicationDate: Date;
}

export class CreateBlogDto {
  title: string;
  body: string;
  publicationDate: Date;
}

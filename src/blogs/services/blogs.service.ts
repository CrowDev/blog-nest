import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from '../../entities/Blog.entity';
import { BlogDto, CreateBlogDto } from '../dto/BlogsDto.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogEntityRepository: Repository<BlogEntity>,
  ) {}

  async create(createBlogDto: CreateBlogDto): Promise<BlogEntity> {
    const newBlog = new BlogEntity();
    newBlog.title = createBlogDto.title;
    newBlog.body = createBlogDto.body;
    newBlog.publicationDate = createBlogDto.publicationDate;
    const result = await this.blogEntityRepository.save(newBlog);
    return result;
  }

  async findAll(): Promise<BlogEntity[]> {
    const result = await this.blogEntityRepository.find();
    return result;
  }

  async findOne(id: number): Promise<BlogEntity> {
    const result = await this.blogEntityRepository.findOne({
      where: { id: id },
    });
    return result;
  }

  async update(id: number, updateBlogDto: BlogDto): Promise<BlogEntity> {
    const blog = await this.blogEntityRepository.findOne({
      where: { id: id },
    });
    blog.title = updateBlogDto.title;
    blog.body = updateBlogDto.body;
    blog.publicationDate = updateBlogDto.publicationDate;
    const result = await this.blogEntityRepository.save(blog);
    return result;
  }
}

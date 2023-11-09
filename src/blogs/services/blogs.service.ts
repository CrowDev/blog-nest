import { Injectable, NotFoundException } from '@nestjs/common';
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
    newBlog.categories = [...createBlogDto.categories];
    const result = await this.blogEntityRepository.save(newBlog);
    return result;
  }

  async findAll(): Promise<BlogEntity[]> {
    const result = await this.blogEntityRepository.find({
      where: { deleted: false },
      relations: ['categories'],
    });
    return result;
  }

  async findOne(id: number): Promise<BlogEntity> {
    try {
      const result = await this.blogEntityRepository.findOneOrFail({
        where: { id: id, deleted: false },
        relations: ['categories'],
      });
      return result;
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }

  async update(id: number, updateBlogDto: BlogDto): Promise<BlogEntity> {
    try {
      const blog = await this.blogEntityRepository.findOneOrFail({
        where: { id: id },
      });
      blog.title = updateBlogDto.title;
      blog.body = updateBlogDto.body;
      blog.publicationDate = updateBlogDto.publicationDate;
      blog.categories = [...updateBlogDto.categories];
      const result = await this.blogEntityRepository.save(blog);
      return result;
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const blog = await this.blogEntityRepository.findOneOrFail({
        where: { id: id },
      });
      blog.deleted = true;
      await this.blogEntityRepository.save(blog);
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }
}

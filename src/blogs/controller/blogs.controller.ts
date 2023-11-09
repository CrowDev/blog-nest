import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { BlogEntity } from '../../entities/Blog.entity';
import { BlogDto, CreateBlogDto } from '../dto/BlogsDto.dto';
import { BlogsService } from '../services/blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get('all')
  findAll(): Promise<BlogEntity[]> {
    const result = this.blogsService.findAll();
    return result;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BlogEntity> {
    const result = this.blogsService.findOne(Number(id));
    return result;
  }

  @Post('create')
  create(@Body() createBlogDto: CreateBlogDto): Promise<BlogEntity> {
    const result = this.blogsService.create(createBlogDto);
    return result;
  }

  @Put(':id')
  update(
    @Body() blogDto: BlogDto,
    @Param('id') id: string,
  ): Promise<BlogEntity> {
    const result = this.blogsService.update(Number(id), blogDto);
    return result;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    this.blogsService.remove(Number(id));
    return;
  }
}

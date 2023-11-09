import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Blog } from '../../entities/Blog.entity';
import { CreateBlogDto } from '../dto/BlogsDto.dto';
import { BlogsService } from '../services/blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get('all')
  findAll(): Blog[] {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string): Blog {
    return new Blog();
  }

  @Post('create')
  create(@Body() createBlogDto: CreateBlogDto): Blog {
    const result = this.blogsService.create(createBlogDto);
    return result;
  }
}

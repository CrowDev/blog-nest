import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
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
    try {
      const result = this.blogsService.findOne(Number(id));
      return result;
    } catch (error) {
      throw error;
    }
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
    try {
      const result = this.blogsService.update(Number(id), blogDto);
      return result;
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    try {
      this.blogsService.remove(Number(id));
      return;
    } catch (error) {
      throw error;
    }
  }
}

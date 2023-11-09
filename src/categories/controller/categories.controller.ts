import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CategoryDto, CreateCategoryDto } from '../dto/CategoriesDto.dto';

@Controller('categories')
export class CategoriesController {
  @Get('all')
  findAll(): string {
    return 'This action returns all categories';
  }

  @Get(':id')
  findOne(@Param() id: string): string {
    return 'This action returns a #${id} category';
  }

  @Post('create')
  create(@Body() categoryDto: CreateCategoryDto): string {
    return 'This action adds a new category';
  }

  @Put(':id')
  update(@Body() categoryDto: CategoryDto): string {
    return 'This action updates a #${id} category';
  }

  @Delete(':id')
  remove(@Param() id: string): string {
    return 'This action removes a #${id} category';
  }
}

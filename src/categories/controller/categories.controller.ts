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
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get('all')
  findAll(): Promise<CategoryDto[]> {
    const result = this.categoriesService.findAll();
    return result;
  }

  @Get(':id')
  findOne(@Param() id: string): string {
    return 'This action returns a #${id} category';
  }

  @Post('create')
  create(@Body() categoryDto: CreateCategoryDto): Promise<CategoryDto> {
    const result = this.categoriesService.create(categoryDto);
    return result;
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

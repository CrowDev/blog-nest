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
  findOne(@Param('id') id: string): Promise<CategoryDto> {
    const result = this.categoriesService.findOne(Number(id));
    return result;
  }

  @Post('create')
  create(@Body() categoryDto: CreateCategoryDto): Promise<CategoryDto> {
    const result = this.categoriesService.create(categoryDto);
    return result;
  }

  @Put('edit')
  update(@Body() categoryDto: CategoryDto): Promise<CategoryDto> {
    const result = this.categoriesService.update(categoryDto);
    return result;
  }

  @Delete(':id')
  remove(@Param() id: string): string {
    return 'This action removes a #${id} category';
  }
}

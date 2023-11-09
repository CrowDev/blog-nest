import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('all')
  findAll(): string {
    return 'This action returns all categories';
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a #${id} category';
  }

  @Post('create')
  create(): string {
    return 'This action adds a new category';
  }

  @Put(':id')
  update(): string {
    return 'This action updates a #${id} category';
  }

  @Delete(':id')
  remove(): string {
    return 'This action removes a #${id} category';
  }
}

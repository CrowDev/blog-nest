import { Module } from '@nestjs/common';
import { CategoriesController } from './controller/categories.controller';

@Module({
  controllers: [CategoriesController],
})
export class CategoriesModule {}

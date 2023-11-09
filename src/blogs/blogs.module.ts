import { Module } from '@nestjs/common';
import { BlogsController } from './controller/blogs.controller';

@Module({
  controllers: [BlogsController],
})
export class BlogsModule {}

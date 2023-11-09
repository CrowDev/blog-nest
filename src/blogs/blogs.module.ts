import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from '../entities/Blog.entity';
import { BlogsController } from './controller/blogs.controller';
import { BlogsService } from './services/blogs.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}

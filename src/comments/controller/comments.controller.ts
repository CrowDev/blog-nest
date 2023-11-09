import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CommentEntity } from '@/entities/Comment.entity';
import { CommentDto, CreateComentDto } from '../dto/CommentsDto.dto';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}
  @Get('all')
  findAll(): Promise<CommentEntity[]> {
    try {
      return this.commentsService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CommentEntity> {
    try {
      return this.commentsService.findOne(Number(id));
    } catch (error) {
      throw error;
    }
  }

  @Post('create')
  create(@Body() commentDto: CreateComentDto): Promise<CommentEntity> {
    try {
      return this.commentsService.create(commentDto);
    } catch (error) {
      throw error;
    }
  }

  @Put('edit')
  update(@Body() commentDto: CommentDto): Promise<CommentEntity> {
    try {
      return this.commentsService.update(commentDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    try {
      this.commentsService.delete(Number(id));
      return;
    } catch (error) {
      throw error;
    }
  }
}

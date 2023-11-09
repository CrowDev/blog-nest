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
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CommentEntity> {
    return this.commentsService.findOne(Number(id));
  }

  @Post('create')
  create(@Body() commentDto: CreateComentDto): Promise<CommentEntity> {
    return this.commentsService.create(commentDto);
  }

  @Put('edit')
  update(@Body() commentDto: CommentDto): Promise<CommentEntity> {
    return this.commentsService.update(commentDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    this.commentsService.delete(Number(id));
    return;
  }
}

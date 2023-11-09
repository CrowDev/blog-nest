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

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}
  @Get('all')
  findAll(): Promise<CommentEntity[]> {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a #${id} comment';
  }

  @Post('create')
  create(): string {
    return 'This action adds a new comment';
  }

  @Put('edit')
  update(): string {
    return 'This action updates a #${id} comment';
  }

  @Delete('delete')
  delete(): string {
    return 'This action removes a #${id} comment';
  }
}

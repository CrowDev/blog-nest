import { CommentEntity } from '@/entities/Comment.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentsRepository: Repository<CommentEntity>,
  ) {}

  async findAll(): Promise<CommentEntity[]> {
    return await this.commentsRepository.find();
  }
}

import { CommentEntity } from '@/entities/Comment.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentDto, CreateComentDto } from '../dto/CommentsDto.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentsRepository: Repository<CommentEntity>,
  ) {}

  async findAll(): Promise<CommentEntity[]> {
    return await this.commentsRepository.find();
  }

  async findOne(id: number): Promise<CommentEntity> {
    return await this.commentsRepository.findOne({
      where: { id, deleted: false },
    });
  }

  async create(comment: CreateComentDto): Promise<CommentEntity> {
    return await this.commentsRepository.save(comment);
  }

  async update(comment: CommentDto): Promise<CommentEntity> {
    await this.commentsRepository.update(comment.id, comment);
    return await this.commentsRepository.findOne({
      where: { id: comment.id, deleted: false },
    });
  }

  async delete(id: number): Promise<void> {
    await this.commentsRepository.update(id, { deleted: true });
  }
}

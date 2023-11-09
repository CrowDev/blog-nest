import { CommentEntity } from '@/entities/Comment.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
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
    return await this.commentsRepository.find({
      where: { deleted: false },
      relations: ['blog'],
    });
  }

  async findOne(id: number): Promise<CommentEntity> {
    try {
      return await this.commentsRepository.findOneOrFail({
        where: { id, deleted: false },
        relations: ['blog'],
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async create(comment: CreateComentDto): Promise<CommentEntity> {
    return await this.commentsRepository.save(comment);
  }

  async update(comment: CommentDto): Promise<CommentEntity> {
    try {
      await this.commentsRepository.update(comment.id, comment);
      return await this.commentsRepository.findOneOrFail({
        where: { id: comment.id, deleted: false },
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async delete(id: number): Promise<void> {
    await this.commentsRepository.update(id, { deleted: true });
  }
}

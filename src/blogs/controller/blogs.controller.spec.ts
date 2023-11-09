import { Test, TestingModule } from '@nestjs/testing';
import { Blog } from '../../entities/Blog.entity';
import { BlogsController } from './blogs.controller';
import { BlogsService } from '../services/blogs.service';
import { CreateBlogDto } from '../dto/BlogsDto.dto';

describe('BlogsController', () => {
  let controller: BlogsController;
  let service: BlogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogsController],
      providers: [BlogsService],
    }).compile();

    controller = module.get<BlogsController>(BlogsController);
    service = module.get<BlogsService>(BlogsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of blogs', () => {
    const result = controller.findAll();
    expect(result).toEqual([]);
  });

  it('should return a blog passing an id', () => {
    const result = controller.findOne(`${1}`);
    expect(result).toBeInstanceOf(Blog);
  });

  it('should call create method from service', () => {
    const createBlogSpy = jest
      .spyOn(service, 'create')
      .mockReturnValue(new Blog());

    const result = controller.create(new Blog());
    expect(result).toBeInstanceOf(Blog);
    expect(createBlogSpy).toHaveBeenCalled();
  });
});

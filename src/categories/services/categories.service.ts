import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entities/Category.entity';
import { Repository } from 'typeorm';
import { CategoryDto, CreateCategoryDto } from '../dto/CategoriesDto.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryEntityRepository: Repository<CategoryEntity>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = new CategoryEntity();
    newCategory.name = createCategoryDto.name;
    const result = await this.categoryEntityRepository.save(newCategory);
    return result;
  }

  async findAll(): Promise<CategoryEntity[]> {
    const result = await this.categoryEntityRepository.find({
      where: { deleted: false },
    });
    return result;
  }

  async findOne(id: number): Promise<CategoryEntity> {
    const result = await this.categoryEntityRepository.findOneOrFail({
      where: { id, deleted: false },
    });
    return result;
  }

  async update(categoryDto: CategoryDto): Promise<CategoryEntity> {
    const category = await this.categoryEntityRepository.findOneOrFail({
      where: { id: categoryDto.id },
    });
    category.name = categoryDto.name;
    const result = await this.categoryEntityRepository.save(category);
    return result;
  }
}

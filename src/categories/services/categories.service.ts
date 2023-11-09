import { Injectable, NotFoundException } from '@nestjs/common';
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
    try {
      const result = await this.categoryEntityRepository.findOneOrFail({
        where: { id, deleted: false },
      });
      return result;
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }

  async update(categoryDto: CategoryDto): Promise<CategoryEntity> {
    try {
      const category = await this.categoryEntityRepository.findOneOrFail({
        where: { id: categoryDto.id },
      });
      category.name = categoryDto.name;
      const result = await this.categoryEntityRepository.save(category);
      return result;
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const category = await this.categoryEntityRepository.findOneOrFail({
        where: { id },
      });
      category.deleted = true;
      await this.categoryEntityRepository.save(category);
    } catch (error) {
      throw new NotFoundException('Not found');
    }
  }
}

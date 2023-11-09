import { Category } from './Category.entity';

describe('CategoryEntity', () => {
  it('should be a class', () => {
    expect(typeof Category).toBe('function');
    expect(Category.prototype.constructor).toBe(Category);
  });

  it('should have an id and name property', () => {
    const category = new Category();
    category.id = 1;
    category.name = 'Category 1';
    expect(category).toHaveProperty('id');
    expect(category).toHaveProperty('name');
  });
});

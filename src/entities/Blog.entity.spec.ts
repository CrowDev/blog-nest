import { Blog } from './Blog.entity';

describe('BlogEntity', () => {
  it('sould be defined', () => {
    expect(Blog).toBeDefined();
  });

  it('should be a class', () => {
    expect(typeof Blog).toBe('function');
  });

  it('should have id, title, body and publicationDate properties', () => {
    const blog = new Blog();
    blog.id = 1;
    blog.title = 'Blog title';
    blog.body = 'Blog body';
    blog.publicationDate = new Date();
    expect(blog).toHaveProperty('id');
    expect(blog).toHaveProperty('title');
    expect(blog).toHaveProperty('body');
    expect(blog).toHaveProperty('publicationDate');
  });
});

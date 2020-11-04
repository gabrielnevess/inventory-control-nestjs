import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from '../repository/category.repository';
import { Category } from '../models/category.entity';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private categoriesRepository: CategoryRepository) { }
    
    async save(category: Category): Promise<Category> {
        return await this.categoriesRepository.save(category);
    }

    async update(c: Category): Promise<Category> {
        const category: Category = await this.categoriesRepository.findOneOrFail(c.id);
        category.name = c.name;
        return await this.categoriesRepository.save(category);
    }

    async findById(id: number): Promise<Category> {
        return await this.categoriesRepository.findOneOrFail(id);
    }

    async delete(id: number) {
        await this.categoriesRepository.delete({ id: id });
    }

    async findAll(): Promise<Category[]> {
        return await this.categoriesRepository.find();
    }

}

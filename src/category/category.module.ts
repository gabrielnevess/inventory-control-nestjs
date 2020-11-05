import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/category.entity';
import { CategoryService } from '../category/category.service';
import { CategoryController } from '../category/category.controller';
import { CategoryRepository } from '../category/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryRepository])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}

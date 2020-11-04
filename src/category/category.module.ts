import { Module } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryController } from '../controllers/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../models/category.entity';
import { CategoryRepository } from '../repository/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryRepository])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}

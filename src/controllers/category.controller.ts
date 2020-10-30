import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Category } from '../models/category.entity';
import { CategoryService } from '../services/category.service';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }

    @Post()
    create(@Body() category: Category) {
        return this.categoryService.save(category);
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.categoryService.findById(id);
    }

}

import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Redirect } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor (private readonly productService: ProductsService) {
    }

    @Get('/notification')
    // @Redirect('https://youtube.com', 301)
    getNotification () {
        return this.productService.getNotification()
    }

    @Post()
    posttoken(@Body() token: any) {
        console.log(token);
        return `room_${token.token}`
    }

    @Get(':id')
    getOne (@Param('id') id:string) {
        // return this.productService.getById(id)
    }

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProduct: CreateProductDto) {
        return this.productService.create(createProduct)
    }

    @Delete(':id')
    remove(@Param('id') id: string):string {
        return 'Remove' + id
    }

    @Put(":id") 
    update(@Body() updateProduct: UpdateProductDto, @Param('id') id:string) {
        return `new title ${updateProduct.title}, and new price ${updateProduct.price} in ${id}: id`
    }
}

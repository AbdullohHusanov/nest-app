import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    
    private users = [
        {
            userid: 1,
        },{
            userid: 2,
        },{
            userid: 3,
        },{
            userid: 4,
        }
    ]

    private notification = [
        {
            text: 'Some organisation name',
            sendTo: this.users
        }
    ]

    getAll() {
        return this.users
    }

    // getById(id: string) {
    //     return this.users.find(p => p.id === id)
    // }

    getNotification () {        
        return this.notification
    }

    create (productDto: CreateProductDto) {
        // this.users.push({
        //     ...productDto,
        //     id: Date.now().toString()
        // })

        console.log(productDto);
        

        return productDto
    }

    remove (id :string) {
        this.users.splice(+id, 1)
    }

    // update (id: string, updateProduct: UpdateProductDto) {
    //     this.users[+id].title = updateProduct.title
    //     this.users[+id].price = updateProduct.price
    // }
}

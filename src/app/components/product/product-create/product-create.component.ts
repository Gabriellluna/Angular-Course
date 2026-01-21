import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  standalone: false,
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {
  
  constructor(private productService: ProductService, private router: Router){}

  produto : Product = {name:'', price: 0.00 }

  show(){
    console.log(this.produto)
  }

  createProduct() : void{
    this.productService.create(this.produto).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso")
      this.router.navigate(['products'])
      this.show()
    })
  }

  cancelProduct() : void{
    this.router.navigate(['products'])
  }

  ngOnInit(): void {

  }

}

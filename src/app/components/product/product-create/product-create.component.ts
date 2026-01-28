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

  produto : Product = {name:'', price: undefined }

  createProduct() : void{
    if(this.produto.name != null && this.produto.price != null){
      this.productService.create(this.produto).subscribe(() => {
        this.productService.showMessage("Produto criado com sucesso")
        this.router.navigate(['products'])
      })
    }else{
      this.productService.showMessage("É necessário preencher os campos antes de enviar o formulário!")
    }
  }

  cancelProduct() : void{
    this.router.navigate(['products'])
  }

  ngOnInit(): void {

  }

}

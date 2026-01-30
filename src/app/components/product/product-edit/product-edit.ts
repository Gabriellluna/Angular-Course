import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  standalone: false,
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css',
})
export class ProductEdit implements OnInit{

  produto : Product = {name:'', price: undefined }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}
  //o id no fim das contas vem direto da url, mais fácil e fluxo mais limpo
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(prod => {
      this.produto.id = prod.id
      this.produto.name = prod.name
      this.produto.price = prod.price
    })
  }


  cancelProduct() : void{
    this.router.navigate(['products'])
  }

  updateProduct() : void{
    this.productService.update(this.produto).subscribe(product => {
      this.productService.showMessage("Produto alterado com sucesso!")
    })
    this.router.navigate(['products'])
  }

}

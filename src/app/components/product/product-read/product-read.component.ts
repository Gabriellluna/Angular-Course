import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-read',
  standalone: false,
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router){}

  produtos: Product[] = []

  product!: Product;

  isModalOpen: boolean = false

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.produtos = products
    })
  }

  openModal(produto: Product){
    this.isModalOpen = true
    console.log(produto)
    this.product = produto
  }

  cancel(){
    this.isModalOpen = false
  }

  deleteProduct(){
    if (!this.product?.id) {
      return;
    }    
  this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso!');
      this.productService.read().subscribe((products) => {
        this.produtos = products
      })
      this.isModalOpen = false
    })
  }
  
}

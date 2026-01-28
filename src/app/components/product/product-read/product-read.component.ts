import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  standalone: false,
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit {
  constructor(private productService: ProductService){}

  produtos: Product[] = []

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.produtos = products
      console.log("Lista de prods: ",this.produtos)
    })
  }

}

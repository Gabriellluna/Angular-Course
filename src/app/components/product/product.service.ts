import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { ThumbPosition } from '@angular/material/slider/testing';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar, private http : HttpClient) { }

  baseUrl = "http://localhost:3001/products"

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      verticalPosition:"top",
      horizontalPosition:"center"
    })
  }

  create(product: Product) : Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  update(product: Product) : Observable<Product>{
    return this.http.put<Product>(this.baseUrl, product)
  }

  // readById(id: String) : Observable
}

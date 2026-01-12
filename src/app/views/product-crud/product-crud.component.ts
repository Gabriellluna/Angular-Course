import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-crud',
  standalone: false,
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit {

  atributoaleatorio  = "kakaka"

  ngOnInit(): void {
    
  }

  fazerAlgo(): void{
    console.log("Fiz algo!")
  }

}

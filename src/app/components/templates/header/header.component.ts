import { Component, OnInit } from '@angular/core';
import { HeaderData } from '../footer/header-data.model';
import { HeaderService } from '../footer/header.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private headerService: HeaderService){}

  headerData!: HeaderData

  ngOnInit(): void {
  }

  get title() : string{
    return this.headerService.headerData.title
  }

  get icon() : string{
    return this.headerService.headerData.icon
  }

  get route() : string {
    return this.headerService.headerData.route
  }

}

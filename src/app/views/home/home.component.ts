import { Component } from '@angular/core';
import { HeaderService } from '../../components/templates/footer/header.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private headerService : HeaderService){
    this.headerService.headerData.icon="home"
    this.headerService.headerData.title="Início"
    this.headerService.headerData.route=" "
  }

}

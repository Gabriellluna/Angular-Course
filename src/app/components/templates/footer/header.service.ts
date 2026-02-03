import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title:"Home",
    icon:"home",
    route:""
  })
  

  get headerData() : HeaderData{
    return this._headerData.value
  }

  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }


  constructor(){}
}

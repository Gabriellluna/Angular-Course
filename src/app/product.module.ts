import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { WhiteDirective } from './directives/white.directive';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ForDirective } from './directives/for.directive';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { ProductEdit } from './components/product/product-edit/product-edit';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductCrudComponent,
    WhiteDirective,
    ProductReadComponent,
    ProductEdit,
    ForDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    CurrencyMaskModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }]
})
export class ProductModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MoedasListComponent } from "./moedas-list.component";
import { MoedaComponent } from '../../../models/moeda.component';
import { filterbyDescription } from "./filterByDescription.pipe";
import { ExibeMoedaComponent } from '../exibe-moeda/exibe-moeda.component';

@NgModule({
  declarations: [ MoedasListComponent,
    filterbyDescription,
    ExibeMoedaComponent,
    MoedaComponent
    ],
imports: [
  CommonModule,

]
})

export class MoedasListModule{}

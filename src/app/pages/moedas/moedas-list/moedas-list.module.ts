import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MoedasListComponent } from "./moedas-list.component";
import { filterbyDescription } from "./filterByDescription.pipe";
import { ExibeMoedaComponent } from '../exibe-moeda/exibe-moeda.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ MoedasListComponent,
    filterbyDescription,
    ExibeMoedaComponent,

    ],
imports: [
  CommonModule,
  FormsModule,
  RouterModule

]
})

export class MoedasListModule{}

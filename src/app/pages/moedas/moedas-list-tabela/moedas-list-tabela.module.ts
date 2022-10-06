import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoedasListTabelaComponent } from './moedas-list-tabela.component';
import { MoedasTabelaListRoutes } from "./moedas-list-tabela.routing";

@NgModule({
  declarations: [ MoedasListTabelaComponent,],
imports: [
  CommonModule,
  FormsModule,
  MoedasTabelaListRoutes,
  RouterModule

]
})

export class MoedasTabelaListModule{}

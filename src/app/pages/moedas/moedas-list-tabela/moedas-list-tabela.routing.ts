import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from '../../../templates/template/template.component';
import { NgModule } from '@angular/core';
import { MoedasListTabelaComponent } from './moedas-list-tabela.component';


const routes : Routes = [
  {path: 'tabela', component: TemplateComponent , children: [
    {path: '', component: MoedasListTabelaComponent}
  ]},
];



@NgModule({
declarations: [],
imports: [
  RouterModule.forChild(routes)
],
exports: [
  RouterModule
]
})
export class MoedasTabelaListRoutes{}

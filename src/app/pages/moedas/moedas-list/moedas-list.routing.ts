import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from '../../../templates/template/template.component';
import { NgModule } from '@angular/core';
import { MoedasListComponent } from './moedas-list.component';


const routes : Routes = [
  {path: 'moedas', component: TemplateComponent , children: [
    {path: '', component: MoedasListComponent}
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
export class MoedasListRoutes{}

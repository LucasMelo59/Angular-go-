import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from '../../../templates/template/template.component';
import { MoedaByIdComponent } from './moeda-by-id.component';


const routes: Routes = [
  {path: 'buscar' , component: TemplateComponent, children: [
    {path: '', component: MoedaByIdComponent}
  ]},
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)]
  ],
  exports: [
    [RouterModule]
  ]
})
export class MoedaByIdRoutes{}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from '../../../templates/template/template.component';
import { MoedaInvalidaComponent } from './moeda-invalida.component';



const routes: Routes = [
  {path: 'moeda-invalida', component:TemplateComponent, children:[
    {path: '', component: MoedaInvalidaComponent}
  ]},
];


@NgModule({
  declarations:[],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoedaInvalidaRoutes{}

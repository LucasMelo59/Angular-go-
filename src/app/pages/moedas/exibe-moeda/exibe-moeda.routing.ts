import { TemplateComponent } from '../../../templates/template/template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibeMoedaComponent } from './exibe-moeda.component';


  export const routes : Routes = [
    { path: 'exibe-moeda', component: TemplateComponent, children:[
      {path: '', component: ExibeMoedaComponent}
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
  export class ExibeMoedaRoutes{}

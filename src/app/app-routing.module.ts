import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibeMoedaComponent } from './pages/moedas/exibe-moeda/exibe-moeda.component';
import { ExibeMoedasComponent } from './pages/moedas/exibe-moedas/exibe-moedas.component';
import { MoedaInvalidaComponent } from './pages/moedas/moeda-invalida/moeda-invalida.component';

const routes: Routes = [
  {path: 'moeda', component: ExibeMoedaComponent},
  {path: 'moedas', component: ExibeMoedasComponent},
  {path: '**', component: MoedaInvalidaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

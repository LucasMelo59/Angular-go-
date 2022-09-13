import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExibeMoedaComponent } from './moedas/exibe-moeda/exibe-moeda.component';
import { ExibeMoedasComponent } from './moedas/exibe-moedas/exibe-moedas.component';
import { MoedaInvalidaComponent } from "./moedas/moeda-invalida/moeda-invalida.component";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ExibeMoedaComponent,
    ExibeMoedasComponent,
    MoedaInvalidaComponent
  ],
  imports: [
      HttpClientModule,
      CommonModule
  ]
})
export class PagesModule {}

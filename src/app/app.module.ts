import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateViewModule } from './templates/template/template.module';
import { MoedaInvalidaRoutes } from './pages/moedas/moeda-invalida/moeda-invalida.routing';
import { MoedaInvalidaModule } from './pages/moedas/moeda-invalida/moeda-invalida.module';
import { HttpClientModule } from '@angular/common/http';
import { ExibeMoedaRoutes } from './pages/moedas/exibe-moeda/exibe-moeda.routing';
import { MoedasListModule } from './pages/moedas/moedas-list/moedas-list.module';
import { MoedasListRoutes } from './pages/moedas/moedas-list/moedas-list.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TemplateViewModule,
    ExibeMoedaRoutes,
    MoedasListModule,
    MoedasListRoutes,
    MoedaInvalidaRoutes,
    MoedaInvalidaModule,
    AppRoutingModule,
    FontAwesomeModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

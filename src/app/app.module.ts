import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateViewModule } from './templates/template/template.module';
import { MoedaInvalidaRoutes } from './pages/moedas/moeda-invalida/moeda-invalida.routing';
import { MoedaInvalidaModule } from './pages/moedas/moeda-invalida/moeda-invalida.module';
import { HttpClientModule } from '@angular/common/http';
import { MoedasListModule } from './pages/moedas/moedas-list/moedas-list.module';
import { MoedasListRoutes } from './pages/moedas/moedas-list/moedas-list.routing';
import { MoedaByIdRoutes } from './pages/moedas/moeda-by-id/moeda-by-id.routing';
import { MoedaByIdModule } from './pages/moedas/moeda-by-id/moeda-by-id.module';
import { NavBarComponent } from './templates/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TemplateViewModule,
    MoedasListModule,
    MoedasListRoutes,
    MoedaInvalidaRoutes,
    MoedaInvalidaModule,
    MoedaByIdRoutes,
    MoedaByIdModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

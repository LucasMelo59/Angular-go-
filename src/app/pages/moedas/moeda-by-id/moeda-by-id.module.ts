import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MoedaByIdComponent } from './moeda-by-id.component';

@NgModule({ declarations: [ MoedaByIdComponent ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]


})

export class MoedaByIdModule{}

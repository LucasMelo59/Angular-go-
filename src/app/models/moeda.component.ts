import { Component, Input, OnInit } from '@angular/core';
import { Moeda } from './moeda';
import { MoedasService } from '../pages/moedas/moedas-list/service/moedas-list.service';
@Component({
  selector: 'ap-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: [ './moeda.component.scss' ]
})
export class MoedaComponent implements OnInit {
  moedas!: Moeda ;
 constructor(private moedasService: MoedasService){}
  ngOnInit(): void {
  }








}

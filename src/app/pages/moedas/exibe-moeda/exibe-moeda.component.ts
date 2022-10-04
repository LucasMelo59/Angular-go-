import { Component, Input, OnInit } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';
import { MoedasService } from '../moedas-list/service/moedas-list.service';

@Component({
  selector: 'app-exibe-moeda',
  templateUrl: './exibe-moeda.component.html',
  styleUrls: ['./exibe-moeda.component.scss']
})
export class ExibeMoedaComponent implements OnInit {
 moedas: Moeda | undefined;

  constructor(private moedaService :MoedasService) { }

  ngOnInit(): void {
  }

}

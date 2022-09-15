import { Component, Input, OnInit } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';
import { nav } from '../../../models/moeda';

@Component({
  selector: 'app-exibe-moeda',
  templateUrl: './exibe-moeda.component.html',
  styleUrls: ['./exibe-moeda.component.scss']
})
export class ExibeMoedaComponent implements OnInit {
 @Input() moedas: Moeda[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

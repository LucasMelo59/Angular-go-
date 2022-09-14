import { Component, Input, OnInit } from '@angular/core';
import { MoedasService } from './service/moedas-list.service';
import { Moeda } from '../../../models/moeda';

@Component({
  selector: 'app-moedas-list',
  templateUrl: './moedas-list.component.html',
  styleUrls: ['./moedas-list.component.scss']
})
export class MoedasListComponent implements OnInit {

  moedas: Moeda[] = [];
  filter: string = '';
  constructor(private MoedasService: MoedasService) { }

  ngOnInit(): void {

    this.MoedasService
    .listFromUser()
    .subscribe(moedas => this.moedas = moedas);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoedaService } from './service/exibe-moedas.service';
import {  Moeda } from '../../../models/moeda';

@Component({
  selector: 'app-exibe-moedas',
  templateUrl: './exibe-moedas.component.html',
  styleUrls: ['./exibe-moedas.component.scss']
})
export class ExibeMoedasComponent implements OnInit {

  moedas: Moeda[] = [];
  constructor(private MoedaService: MoedaService, private activetedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.MoedaService.listFromUser().subscribe(moedas => this.moedas = moedas);
    console.log(this.moedas)
  }

}

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
  constructor(private moedasService: MoedasService) { }


  ngOnInit(): void {
    this.moedasService.allCoins.subscribe(
      res => {
        this.moedas = res;
      }
    );

}

addVotos(moedas: Moeda, id: number){
  this.moedasService.Votes(moedas, id).subscribe(
    result => {
      moedas.votos = result.votos
    }
  )

}

downVotos(moedas: Moeda, id: number){
  this.moedasService.DownVotes(id, moedas).subscribe(
    result => {
      moedas.votos = result.votos
    }
  )

}
}

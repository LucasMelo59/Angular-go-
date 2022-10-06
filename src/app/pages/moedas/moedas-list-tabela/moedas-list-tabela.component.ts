import { Component, OnInit } from '@angular/core';
import { Moeda } from '../../../models/moeda';
import { MoedasService } from '../moedas-list/service/moedas-list.service';

@Component({
  selector: 'app-moedas-list-tabela',
  templateUrl: './moedas-list-tabela.component.html',
  styleUrls: ['./moedas-list-tabela.component.scss']
})
export class MoedasListTabelaComponent implements OnInit {
moedas:  Moeda[] = []

constructor(private moedasService: MoedasService) { }

  ngOnInit(): void {
    this.moedasService.allCoins.subscribe(
      res => {
        this.moedas = res;
      }
    )
  }

  addVotos(id: number ,  model: Moeda){
    this.moedasService.Votes(model, id ).subscribe(
      res => model.votos = res.votos
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

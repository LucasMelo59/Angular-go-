import { Component, Input, OnInit } from '@angular/core';
import { Moeda, nav } from './moeda';
import { MoedasService } from '../pages/moedas/moedas-list/service/moedas-list.service';
@Component({
  selector: 'ap-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: [ './moeda.component.scss' ]
})
export class MoedaComponent implements OnInit {
  moedas: Moeda[] = []
 constructor(private MoedasService: MoedasService){}
  ngOnInit(): void {
  }
  

  @Input() id: number = 0;
  @Input() class =''
  @Input() nome = '';
  @Input() preco: number = 0.0;
  @Input() descricao = '';
  @Input() votos = 0;

  addVotos(id:number){

    this.MoedasService.Votes(id).subscribe(moedas => this.moedas = moedas)
  }

  removeVotos(id:number){
    this.MoedasService.DownVotes(id).subscribe(moedas => this.moedas = moedas)
  }
}

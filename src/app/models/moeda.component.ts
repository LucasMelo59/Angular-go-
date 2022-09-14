import { Component, Input, OnInit } from '@angular/core';
import { Moeda } from './moeda';
@Component({
  selector: 'ap-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: [ './moeda.component.scss' ]
})
export class MoedaComponent implements OnInit {
 
 constructor(){}
  ngOnInit(): void {}
  @Input() src =''
  @Input() nome = '';
  @Input() preco: number = 0.0;
  @Input() descricao = '';
  @Input() votos = 0;

}

import { Pipe, PipeTransform } from "@angular/core";
import { Moeda } from "src/app/models/moeda";

@Pipe({ name: 'filterByDescription'})
export class filterbyDescription implements PipeTransform{


  transform(moeda: Moeda[], descriptionQuery: string){
    descriptionQuery =
    descriptionQuery
    .trim()
    .toLowerCase()

    if(descriptionQuery) {
      return moeda.filter(moeda => moeda.nome.toLowerCase().includes(descriptionQuery))
    }else{
      return moeda
    }
  }
}

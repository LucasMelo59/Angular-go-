import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Moeda } from '../../../../models/moeda';

const API = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })
export class MoedasService {

    constructor(private http: HttpClient) {}

    listFromUser() {
        return this.http
            .get<Moeda[]>(API +'/moedas');
    }


    Votes(id:number) {

      return this.http.get<Moeda[]>(API + '/moedas/upvoter/' + id)
    }

    DownVotes(id:number) {

      return this.http.get<Moeda[]>(API + '/moedas/downvoter/' + id)
    }
  }


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Moeda } from '../../../../models/moeda';

const API = 'http://localhost:8080/moedas';

@Injectable({ providedIn: 'root' })
export class MoedasService {

    constructor(private http: HttpClient) {}

    get allCoins(): Observable<Moeda[]>{
      return this.http.get<Moeda[]>(API).pipe(
         res => res
      )
    }

    Votes(id: number, value: number): Observable<Moeda> {

      return this.http.post<Moeda>(`${API}/upvoter/${id}`, {votos: value}).pipe(
        res => res,
        error => error
      )
    }

    DownVotes(id:number) {

      return this.http.get<Moeda[]>(API + '/moedas/downvoter/' + id)
    }
  }


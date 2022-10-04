import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { Moeda } from '../../../../models/moeda';

const API = 'http://localhost:8080/moedas';

@Injectable({ providedIn: 'root' })
export class MoedasService {

    constructor(private http: HttpClient) {}

    get allCoins(): Observable<any>{
      return this.http.get<any>(API).pipe(
         res => res
      )
    }

    Votes(model: Moeda, id: number) {
      return this.http.post<Moeda>(`${API}/upvoter/${id}`, model)
    }

    DownVotes(id:number) {

      return this.http.get<Moeda[]>(API + '/moedas/downvoter/' + id)
    }
  }


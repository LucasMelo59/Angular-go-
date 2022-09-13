import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moeda } from '../../../../models/moeda';


const API = 'http://localhost:3000/moedas';

@Injectable({ providedIn: 'root' })
export class MoedaService {

    constructor(private http: HttpClient) {}

    listFromUser() {
        return this.http
            .get<Moeda[]>(API);
    }
}

import { Injectable } from '@angular/core';
import { contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  private readonly API = "http://localhost:3000/contatos"

  constructor(private http: HttpClient) { 
  }

  obterContatos(): Observable<contato[]>{
    return this.http.get<contato[]>(this.API)
  }

  salvarContato(contato: contato){
    return this.http.post(this.API, contato)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '@interfaces/clientes.interface';
import { enviroments } from '../../environments/environments.prod';

@Injectable({providedIn: 'root'})
export class ClientService {

  private baseUrl: string = enviroments.baseUrl
  constructor(private http: HttpClient) { }

  getHeroes():Observable<Client[]>{

    const url = `${this.baseUrl}/api/clients`;
    return this.http.get<Client[]>( url );

  }

}

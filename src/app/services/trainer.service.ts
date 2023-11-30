import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { enviroments } from '../../environments/environments.prod';
import { Trainer } from '@interfaces/trainer.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseUrl: string = enviroments.baseUrl;

  private http = inject( HttpClient );


  getTrainers(): Observable<Trainer[]> {
    const url = `${this.baseUrl}/api/trainers`;
    return this.http.get<Trainer[]>( url )
  }

}


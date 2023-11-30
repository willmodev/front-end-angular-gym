import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { enviroments } from '../../environments/environments.prod';
import { Plan } from '@interfaces/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private baseUrl: string = enviroments.baseUrl;


  constructor(private http: HttpClient) { }

  getClientes(): Observable<Plan[]> {
    const url = `${this.baseUrl}/api/plans`;
    return this.http.get<Plan[]>(url);
  }

}



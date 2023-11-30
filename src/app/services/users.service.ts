import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import type { User } from '@interfaces/user.interface.ts';
import { Observable } from 'rxjs';
import { enviroments } from '../../environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = enviroments.baseUrl;

  private http = inject( HttpClient );


  getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/api/users`;
    return this.http.get<User[]>( url )
  }


}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  protected url:string = 'https://api.github.com/users';

  constructor(private http:HttpClient) {
  }

  obtener(): Observable<any>{
    return this.http.get(this.url);
  }


}

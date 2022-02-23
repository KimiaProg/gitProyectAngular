import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url:string="";
  constructor(private http:HttpClient) { 
    this.url= "https://api.github.com/users";
  }

  obtener(): Observable<any>{
    return this.http.get(this.url);
  }


}
